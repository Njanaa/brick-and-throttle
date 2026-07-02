'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Comets({ count = 25 }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  
  const comets = useMemo(() => {
    return new Array(count).fill(0).map(() => {
      // Multiply the color by a large scalar to make it super bright for Bloom
      const baseColor = Math.random() > 0.5 ? '#00ffff' : '#ff2d2d';
      const color = new THREE.Color(baseColor).multiplyScalar(8);
      
      return {
        position: [
          (Math.random() - 0.5) * 200,
          Math.random() * 60 + 10,
          (Math.random() - 0.5) * 200 - 50
        ],
        speed: Math.random() * 2 + 1.5,
        color
      };
    });
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    if (!meshRef.current) return;
    const colors = new Float32Array(count * 3);
    comets.forEach((comet, i) => {
      comet.color.toArray(colors, i * 3);
    });
    meshRef.current.instanceColor = new THREE.InstancedBufferAttribute(colors, 3);
  }, [comets, count]);

  useFrame(() => {
    if (!meshRef.current) return;

    comets.forEach((comet, i) => {
      // Move diagonally fast
      comet.position[0] -= comet.speed * 0.8;
      comet.position[1] -= comet.speed * 0.3;
      comet.position[2] += comet.speed * 2.0;

      // Wrap around bounds
      if (comet.position[2] > 100) {
        comet.position[2] = -150;
        comet.position[0] = (Math.random() - 0.5) * 200;
        comet.position[1] = Math.random() * 60 + 10;
      }
      if (comet.position[0] < -100) comet.position[0] = 100;
      if (comet.position[1] < -20) comet.position[1] = 80;

      dummy.position.set(comet.position[0], comet.position[1], comet.position[2]);
      
      // Look in the direction of travel so the stretched box aligns perfectly
      dummy.lookAt(
        comet.position[0] - comet.speed * 0.8,
        comet.position[1] - comet.speed * 0.3,
        comet.position[2] + comet.speed * 2.0
      );
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      {/* Very thin and long box to simulate a glowing comet tail */}
      <boxGeometry args={[0.1, 0.1, 15]} />
      <meshBasicMaterial 
        toneMapped={false}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </instancedMesh>
  );
}
