'use client';

import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Resize, Center } from '@react-three/drei';
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
  const { scene: floorScene } = useGLTF('/models/pbr_sci-fi_modular_flooring.glb');
  const groupRef = useRef<THREE.Group>(null!);

  // Tweak materials so they look good under basic directional lights instead of requiring an HDRI map (which hangs Suspense)
  useMemo(() => {
    [scene, floorScene].forEach((s) => {
      s.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            materials.forEach((mat) => {
              if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhysicalMaterial) {
                // Reduce metalness so it doesn't reflect the black void
                mat.metalness = Math.min(mat.metalness, 0.4);
                // Ensure some roughness so it catches standard lights
                mat.roughness = Math.max(mat.roughness, 0.5);
                mat.needsUpdate = true;
              }
            });
          }
        }
      });
    });
  }, [scene, floorScene]);
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
      {/* The Car Model - Raised slightly to hover higher above the podium */}
      <group position={[0, 1.5, 0]}>
        <primitive object={scene} scale={hovered ? [scale * 1.05, scale * 1.05, scale * 1.05] : [scale, scale, scale]} />
      </group>
      {/* Sci-Fi Modular Flooring - Automatically centered and scaled */}
      <group position={[0, -1.0, 0]}>
        <Resize scale={scale * 2}>
          <Center>
            <primitive object={floorScene} />
          </Center>
        </Resize>
      </group>
    </group>
  );
}

// Preload the models
useGLTF.preload('/models/reference-3D-911-BW-optimized.glb');
useGLTF.preload('/models/3D-911-gulf.glb');
useGLTF.preload('/models/3D-pink-lambo.glb');
useGLTF.preload('/models/pbr_sci-fi_modular_flooring.glb');
