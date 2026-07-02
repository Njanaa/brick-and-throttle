'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface LegoCarProps {
  scrollOffset: number;
  modelUrl: string;
  position?: [number, number, number];
  rotationSpeed?: number;
}

export default function LegoCar({ 
  scrollOffset, 
  modelUrl, 
  position = [0, -0.5, 0],
  rotationSpeed = 0.4 
}: LegoCarProps) {
  // Load the specific GLB file
  const { scene } = useGLTF(modelUrl);
  const groupRef = useRef<THREE.Group>(null!);

  // Collect all meshes and calculate an explosion target for each
  const parts = useMemo(() => {
    const meshes: {
      mesh: THREE.Mesh;
      originalPosition: THREE.Vector3;
      originalRotation: THREE.Euler;
      targetPosition: THREE.Vector3;
      randomRotationSpeed: THREE.Vector3;
    }[] = [];

    const clonedScene = scene.clone();

    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        
        const originalPosition = mesh.position.clone();
        const originalRotation = mesh.rotation.clone();
        
        // Calculate the center of the mesh geometry to figure out which way is "outward"
        mesh.geometry.computeBoundingBox();
        const center = new THREE.Vector3();
        if (mesh.geometry.boundingBox) {
          mesh.geometry.boundingBox.getCenter(center);
        }

        // Explosion vector: moving away from the car's center (0,0,0)
        // Add an upward bias (y + 1) so pieces fly up into the air
        const explosionDir = center.clone().normalize();
        explosionDir.y += 1.0; 
        
        // Randomize the explosion distance slightly for chaos
        const explosionDistance = 2.0 + Math.random() * 3.0;

        const targetPosition = new THREE.Vector3(
          originalPosition.x + explosionDir.x * explosionDistance,
          originalPosition.y + explosionDir.y * explosionDistance,
          originalPosition.z + explosionDir.z * explosionDistance
        );

        const randomRotationSpeed = new THREE.Vector3(
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5
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

    // Scale up the offset so the explosion starts early
    const progress = Math.max(0, Math.min(1, (offset - 0.05) / 0.5));
    const easeProgress = progress * progress * (3 - 2 * progress);

    // Animate each part exploding outward
    parts.meshes.forEach((part) => {
      part.mesh.position.lerpVectors(part.originalPosition, part.targetPosition, easeProgress);
      
      part.mesh.rotation.x = part.originalRotation.x + part.randomRotationSpeed.x * easeProgress;
      part.mesh.rotation.y = part.originalRotation.y + part.randomRotationSpeed.y * easeProgress;
      part.mesh.rotation.z = part.originalRotation.z + part.randomRotationSpeed.z * easeProgress;
    });

    // 1. Keep the car rotating continuously
    groupRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed;

    // 2. Base position offset (no zooming or moving on scroll)
    groupRef.current.position.set(...position);
  });

  return (
    <group ref={groupRef}>
      {/* Increased scale from 4.5 to 6 per user request */}
      <primitive object={parts.scene} scale={[6, 6, 6]} />
    </group>
  );
}

// Preload the models
useGLTF.preload('/models/reference-3D-911-BW.glb');
useGLTF.preload('/models/3D-911-gulf.glb');
useGLTF.preload('/models/3D-pink-lambo.glb');
