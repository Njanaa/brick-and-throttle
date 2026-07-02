'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { 
  generatePorsche911Bricks, 
  generateLamborghiniBricks, 
  BRICK_SIZE, 
  GAP,
  BrickData 
} from '@/data/porsche911Shape';

interface LegoCarProps {
  scrollOffset: number;
  carType: 'porsche' | 'lamborghini';
  emissiveColor: string;
  position?: [number, number, number];
}

export default function LegoCar({ scrollOffset, carType, emissiveColor, position = [0, 0, 0] }: LegoCarProps) {
  // Generate bricks once
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

  // Wheel refs (4 wheels per car)
  const wheelRefs = useRef<THREE.Mesh[]>([]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tempColor = useMemo(() => new THREE.Color(), []);

  const regularColorsSet = useRef(false);
  const emissiveColorsSet = useRef(false);

  // Wheel static configuration coordinates matching the cutouts
  const wheelData = useMemo(() => {
    const stepX = BRICK_SIZE.x + GAP;
    const stepZ = BRICK_SIZE.z + GAP;
    const numCols = 45;
    const offsetX = (numCols * stepX) / 2;
    
    // Front wheel col is 5, Rear wheel col is 37
    const frontX = 5 * stepX - offsetX;
    const rearX = 37 * stepX - offsetX;
    
    // Y position sits at the bottom arches
    const wheelY = -0.5; 
    
    // Z-depth depends on car width
    const depthZ = carType === 'porsche' ? 8 : 10;
    const offsetZ = (10 * stepZ) / 2; // Center offset based on max depth
    
    // Left/Right Z coordinates
    const leftZ = 0 * stepZ - offsetZ + 0.3;
    const rightZ = (depthZ - 1) * stepZ - offsetZ - 0.3;

    return [
      { id: 'fl', startPos: [frontX, wheelY, leftZ] as [number, number, number], vel: [-10, 4, -8] as [number, number, number], rotSpeed: [5, -4, 2] as [number, number, number] }, // Front Left
      { id: 'fr', startPos: [frontX, wheelY, rightZ] as [number, number, number], vel: [-10, 4, 8] as [number, number, number], rotSpeed: [5, 4, -2] as [number, number, number] },  // Front Right
      { id: 'rl', startPos: [rearX, wheelY, leftZ] as [number, number, number], vel: [10, 4, -8] as [number, number, number], rotSpeed: [-5, -4, 2] as [number, number, number] },  // Rear Left
      { id: 'rr', startPos: [rearX, wheelY, rightZ] as [number, number, number], vel: [10, 4, 8] as [number, number, number], rotSpeed: [-5, 4, -2] as [number, number, number] }    // Rear Right
    ];
  }, [carType]);

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

    // Animate individual wheels flying apart
    wheelData.forEach((w, idx) => {
      const mesh = wheelRefs.current[idx];
      if (mesh) {
        // Position flight
        mesh.position.set(
          w.startPos[0] + w.vel[0] * easedProgress,
          w.startPos[1] + w.vel[1] * easedProgress,
          w.startPos[2] + w.vel[2] * easedProgress
        );
        // Rotation flight (Z spin + random scatter)
        mesh.rotation.set(
          w.rotSpeed[0] * easedProgress,
          w.rotSpeed[1] * easedProgress,
          // Add default wheel spin on top of explosion spin
          (offset < assembleEnd ? state.clock.elapsedTime * 4 : 0) + w.rotSpeed[2] * easedProgress
        );
      }
    });

    // Auto-rotation when assembled
    if (groupRef.current) {
      if (offset < assembleEnd) {
        groupRef.current.rotation.y = state.clock.elapsedTime * 0.35;
      }
    }
  });

  // Wheel styling variables
  const wheelColor = carType === 'porsche' ? '#151515' : '#ffd700'; // Gold wheels for Lambo!
  const rimColor = carType === 'porsche' ? '#333333' : '#b8860b';

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

      {/* Actual round wheels (Cylinders) representing real tires */}
      {wheelData.map((w, idx) => (
        <mesh
          key={w.id}
          ref={(el) => { if (el) wheelRefs.current[idx] = el; }}
          position={w.startPos}
          rotation={[0, 0, Math.PI / 2]} // Rotate cylinder to face left/right
          castShadow
        >
          {/* Wheel shape: Outer tire */}
          <cylinderGeometry args={[0.35, 0.35, 0.25, 24]} />
          <meshStandardMaterial color={wheelColor} roughness={0.7} metalness={0.2} />
          
          {/* Inner wheel rim hub */}
          <mesh position={[0, 0.02, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.26, 16]} />
            <meshStandardMaterial color={rimColor} roughness={0.3} metalness={0.8} />
          </mesh>
        </mesh>
      ))}
    </group>
  );
}
