'use client';

import { useRef } from 'react';
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

  useFrame((state) => {
    if (!groupRef.current) return;

    const offset = scrollOffset; // 0 to 1

    // Apply scroll-based animations
    // 1. Initial position/rotation when at top of page
    const startY = -0.5;
    const startZ = 0;
    
    // 2. Target position/rotation when scrolled down
    const endY = -1.5;
    const endZ = 2;

    // Smoothly interpolate based on scroll
    groupRef.current.position.y = THREE.MathUtils.lerp(startY, endY, offset);
    groupRef.current.position.z = THREE.MathUtils.lerp(startZ, endZ, offset);

    // Auto-rotate the model continuously
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;

    // Slight tilt based on scroll
    groupRef.current.rotation.x = offset * Math.PI * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* We scale it up/down to fit the viewport well. Adjust if needed. */}
      <primitive object={scene} scale={[1.5, 1.5, 1.5]} />
    </group>
  );
}

// Preload the model so it loads faster
useGLTF.preload('/models/reference-3D-911-BW.glb');
