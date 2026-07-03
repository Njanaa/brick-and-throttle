'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Sparkles, Grid, Float } from '@react-three/drei';
import LegoCar from './LegoCar';
import Comets from './Comets';

export default function Scene() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 8, 55], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={['#0a0a0f']} />
        
        {/* Fog to blend the grid into the distance */}
        <fog attach="fog" args={['#0a0a0f', 35, 90]} />

        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[-20, 5, -5]} color="#ff2d2d" intensity={4} distance={50} />
        <pointLight position={[20, 5, 5]} color="#00ffff" intensity={4} distance={50} />
        <pointLight position={[0, 10, 15]} color="#f0f0f0" intensity={2} distance={40} />

        {/* Cool Neon Background Elements */}
        {/* Floating Neon Dust/Particles */}
        <Sparkles count={400} scale={80} size={5} speed={0.4} color="#00ffff" opacity={0.6} />
        <Sparkles count={300} scale={80} size={4} speed={0.6} color="#ff2d2d" opacity={0.6} />

        {/* Synthwave Neon Grid Floor */}
        <Grid
          position={[0, -4, 0]}
          args={[160, 160]}
          cellSize={2.5}
          cellThickness={1.2}
          cellColor="#ff2d2d"
          sectionSize={10}
          sectionThickness={1.5}
          sectionColor="#00ffff"
          fadeDistance={90}
          fadeStrength={1.5}
        />

        {/* Render the hero car */}
        <Suspense fallback={null}>
          <Comets count={25} />
          
          {/* Center: BW 911 (Hero position, rotating and hovering well above the floor) */}
          <LegoCar 
            modelUrl="/models/reference-3D-911-BW.glb" 
            position={[0, 0, 0]} 
            rotationSpeed={0.4}
            scale={17.5} 
            isRotating={true}
          />
        </Suspense>

        {/* Post-processing - Intense Neon Glow */}
        <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceThreshold={0.5}
            luminanceSmoothing={0.9}
            intensity={2.5}
            radius={0.8}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
