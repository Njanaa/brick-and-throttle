'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface LegoCarProps {
  scrollOffset: number;
}

export default function LegoCar({ scrollOffset }: LegoCarProps) {
  // Load the user's uploaded GLB file
  const { scene } = useGLTF('/models/reference-3D-911-BW.glb');
  const groupRef = useRef<THREE.Group>(null!);

  // Collect all meshes and store their original transforms so we can animate them
  const parts = useMemo(() => {
    const meshes: {
      mesh: THREE.Mesh;
      originalPosition: THREE.Vector3;
      originalRotation: THREE.Euler;
      targetPosition: THREE.Vector3;
      randomRotationSpeed: THREE.Vector3;
    }[] = [];

    // Make sure we clone the scene so we don't mutate the cached GLTF across re-renders
    const clonedScene = scene.clone();

    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        
        // Store original position and rotation
        const originalPosition = mesh.position.clone();
        const originalRotation = mesh.rotation.clone();
        
        // Unassemble to inside: they move towards the origin (0,0,0) or a central point
        // We'll calculate a target position that collapses them inward
        const targetPosition = new THREE.Vector3(
          originalPosition.x * 0.1, // Move 90% towards center
          originalPosition.y * 0.1,
          originalPosition.z * 0.1
        );

        // Add some random rotation to make the disassembly look chaotic
        const randomRotationSpeed = new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        );

        meshes.push({
          mesh,
          originalPosition,
          originalRotation,
          targetPosition,
          randomRotationSpeed,
        });
      }
    });

    return { scene: clonedScene, meshes };
  }, [scene]);

  useFrame((state) => {
    if (!groupRef.current) return;

    const offset = scrollOffset; // 0 to 1

    // Scale up the offset to make the disassembly happen over a specific scroll range
    // Start un-assembling at 10% scroll, finish at 50%
    const progress = Math.max(0, Math.min(1, (offset - 0.1) / 0.4));
    
    // Easing function for smoother animation
    const easeProgress = progress * progress * (3 - 2 * progress); // smoothstep

    // Animate each part
    parts.meshes.forEach((part) => {
      // Interpolate position from original to target (imploding to inside)
      part.mesh.position.lerpVectors(part.originalPosition, part.targetPosition, easeProgress);
      
      // Interpolate rotation: start at original, add chaotic rotation as it implodes
      part.mesh.rotation.x = part.originalRotation.x + part.randomRotationSpeed.x * easeProgress;
      part.mesh.rotation.y = part.originalRotation.y + part.randomRotationSpeed.y * easeProgress;
      part.mesh.rotation.z = part.originalRotation.z + part.randomRotationSpeed.z * easeProgress;
      
      // Also scale them down to 0 so they disappear inside
      const scale = 1 - easeProgress;
      part.mesh.scale.set(scale, scale, scale);
    });

    // Animate the entire car group (rotation and position)
    const startY = -0.5;
    const startZ = 0;
    const endY = -1.5;
    const endZ = 2;

    groupRef.current.position.y = THREE.MathUtils.lerp(startY, endY, offset);
    groupRef.current.position.z = THREE.MathUtils.lerp(startZ, endZ, offset);

    // Auto-rotate the model continuously so the user can see it
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    
    // Slight tilt based on scroll
    groupRef.current.rotation.x = offset * Math.PI * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Increased scale from 1.5 to 4.5 to fit the page better. */}
      {/* Adjust this value up or down depending on the model's actual internal scale */}
      <primitive object={parts.scene} scale={[4.5, 4.5, 4.5]} />
    </group>
  );
}

// Preload the model so it loads faster
useGLTF.preload('/models/reference-3D-911-BW.glb');
