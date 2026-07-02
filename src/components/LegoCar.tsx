'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { 
  generatePorsche911Bricks, 
  generateLamborghiniBricks, 
  BRICK_SIZE, 
  BrickData 
} from '@/data/porsche911Shape';

interface LegoCarProps {
  scrollOffset: number;
  carType: 'porsche' | 'lamborghini';
  emissiveColor: string;
  position?: [number, number, number];
}

export default function LegoCar({ scrollOffset, carType, emissiveColor, position = [0, 0, 0] }: LegoCarProps) {
  const { regularBricks, emissiveBricks } = useMemo(() => {
    const allBricks = carType === 'porsche' 
      ? generatePorsche911Bricks() 
      : generateLamborghiniBricks();
      
    const regular: BrickData[] = [];
    const emissive: BrickData[] = [];
    for (const brick of allBricks) {
      if (brick.isEmissive) {
        emissive.push(brick);
      } else {
        regular.push(brick);
      }
    }
    return { regularBricks: regular, emissiveBricks: emissive };
  }, [carType]);

  const groupRef = useRef<THREE.Group>(null!);
  const regularMeshRef = useRef<THREE.InstancedMesh>(null!);
  const emissiveMeshRef = useRef<THREE.InstancedMesh>(null!);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tempColor = useMemo(() => new THREE.Color(), []);

  const regularColorsSet = useRef(false);
  const emissiveColorsSet = useRef(false);

  useFrame((state) => {
    // Set colors once on first frame
    if (!regularColorsSet.current && regularMeshRef.current) {
      for (let i = 0; i < regularBricks.length; i++) {
        tempColor.set(regularBricks[i].color);
        regularMeshRef.current.setColorAt(i, tempColor);
      }
      if (regularMeshRef.current.instanceColor) {
        regularMeshRef.current.instanceColor.needsUpdate = true;
      }
      regularColorsSet.current = true;
    }

    if (!emissiveColorsSet.current && emissiveMeshRef.current && emissiveBricks.length > 0) {
      for (let i = 0; i < emissiveBricks.length; i++) {
        tempColor.set(emissiveBricks[i].color);
        emissiveMeshRef.current.setColorAt(i, tempColor);
      }
      if (emissiveMeshRef.current.instanceColor) {
        emissiveMeshRef.current.instanceColor.needsUpdate = true;
      }
      emissiveColorsSet.current = true;
    }

    const offset = scrollOffset;

    const assembleEnd = 0.15;
    const explodeStart = 0.15;
    const explodeEnd = 0.55;

    const rawProgress = Math.max(0, Math.min(1, (offset - explodeStart) / (explodeEnd - explodeStart)));
    const easedProgress = Math.pow(rawProgress, 1.5);

    // Update regular bricks
    if (regularMeshRef.current) {
      for (let i = 0; i < regularBricks.length; i++) {
        const brick = regularBricks[i];
        dummy.position.set(
          brick.position[0] + brick.velocity[0] * easedProgress,
          brick.position[1] + brick.velocity[1] * easedProgress,
          brick.position[2] + brick.velocity[2] * easedProgress
        );
        dummy.rotation.set(
          brick.rotationSpeed[0] * easedProgress,
          brick.rotationSpeed[1] * easedProgress,
          brick.rotationSpeed[2] * easedProgress
        );
        dummy.updateMatrix();
        regularMeshRef.current.setMatrixAt(i, dummy.matrix);
      }
      regularMeshRef.current.instanceMatrix.needsUpdate = true;
    }

    // Update emissive bricks
    if (emissiveMeshRef.current && emissiveBricks.length > 0) {
      for (let i = 0; i < emissiveBricks.length; i++) {
        const brick = emissiveBricks[i];
        dummy.position.set(
          brick.position[0] + brick.velocity[0] * easedProgress,
          brick.position[1] + brick.velocity[1] * easedProgress,
          brick.position[2] + brick.velocity[2] * easedProgress
        );
        dummy.rotation.set(
          brick.rotationSpeed[0] * easedProgress,
          brick.rotationSpeed[1] * easedProgress,
          brick.rotationSpeed[2] * easedProgress
        );
        dummy.updateMatrix();
        emissiveMeshRef.current.setMatrixAt(i, dummy.matrix);
      }
      emissiveMeshRef.current.instanceMatrix.needsUpdate = true;
    }

    // Auto-rotation when assembled
    if (groupRef.current) {
      if (offset < assembleEnd) {
        groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      }
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Regular bricks */}
      {regularBricks.length > 0 && (
        <instancedMesh
          ref={regularMeshRef}
          args={[undefined, undefined, regularBricks.length]}
          castShadow
        >
          <boxGeometry args={[BRICK_SIZE.x, BRICK_SIZE.y, BRICK_SIZE.z]} />
          <meshStandardMaterial vertexColors roughness={0.3} metalness={0.1} />
        </instancedMesh>
      )}

      {/* Emissive bricks (neon glow) */}
      {emissiveBricks.length > 0 && (
        <instancedMesh
          ref={emissiveMeshRef}
          args={[undefined, undefined, emissiveBricks.length]}
        >
          <boxGeometry args={[BRICK_SIZE.x, BRICK_SIZE.y, BRICK_SIZE.z]} />
          <meshStandardMaterial
            vertexColors
            emissive={emissiveColor}
            emissiveIntensity={2.5}
            toneMapped={false}
            roughness={0.2}
          />
        </instancedMesh>
      )}
    </group>
  );
}
