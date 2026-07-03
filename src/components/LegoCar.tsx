'use client';

import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useRouter } from 'next/navigation';

interface LegoCarProps {
  modelUrl: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  rotationSpeed?: number;
  scale?: number;
  isRotating?: boolean;
}

export default function LegoCar({ 
  modelUrl, 
  position = [0, -0.5, 0],
  rotation = [0, 0, 0],
  rotationSpeed = 0.4,
  scale = 8,
  isRotating = true
}: LegoCarProps) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  
  // Load the specific GLB file
  const { scene } = useGLTF(modelUrl);
  const groupRef = useRef<THREE.Group>(null!);

  // Enforce 95% opacity on the materials
  useMemo(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          // If it's an array of materials, handle all of them
          const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          materials.forEach((mat) => {
            if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhysicalMaterial) {
              mat.transparent = true;
              mat.opacity = 0.95;
              mat.needsUpdate = true;
            }
          });
        }
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (!groupRef.current) return;

    if (isRotating) {
      // Continuous smooth rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed;
      // Slight bobbing effect
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    } else {
      // Ensure it stays locked in its exact resting position and rotation
      groupRef.current.position.set(...position);
      groupRef.current.rotation.set(...rotation);
    }
  });

  return (
    <group 
      ref={groupRef}
      onClick={(e) => {
        e.stopPropagation();
        router.push('/catalog');
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      <primitive object={scene} scale={hovered ? [scale * 1.05, scale * 1.05, scale * 1.05] : [scale, scale, scale]} />
    </group>
  );
}

// Preload the models
useGLTF.preload('/models/reference-3D-911-BW.glb');
useGLTF.preload('/models/3D-911-gulf.glb');
useGLTF.preload('/models/3D-pink-lambo.glb');
