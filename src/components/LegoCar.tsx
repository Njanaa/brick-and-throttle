'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface LegoCarProps {
  modelUrl: string;
  position?: [number, number, number];
  rotationSpeed?: number;
  scale?: number;
}

export default function LegoCar({ 
  modelUrl, 
  position = [0, -0.5, 0],
  rotationSpeed = 0.4,
  scale = 8 // Increased scale to fill page
}: LegoCarProps) {
  // Load the specific GLB file
  const { scene } = useGLTF(modelUrl);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Just continuous smooth rotation, no shattering
    groupRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed;
    
    // Slight bobbing effect for a cool hover feel
    groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
  });

  return (
    <group ref={groupRef} position={position}>
      <primitive object={scene} scale={[scale, scale, scale]} />
    </group>
  );
}

// Preload the models
useGLTF.preload('/models/reference-3D-911-BW.glb');
useGLTF.preload('/models/3D-911-gulf.glb');
useGLTF.preload('/models/3D-pink-lambo.glb');
