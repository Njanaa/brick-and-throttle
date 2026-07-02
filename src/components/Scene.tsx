'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Sparkles, Grid, Float } from '@react-three/drei';
import LegoCar from './LegoCar';

export default function Scene() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 5, 30], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={['#0a0a0f']} />
        
        {/* Fog to blend the grid into the distance */}
        <fog attach="fog" args={['#0a0a0f', 20, 60]} />

        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[-10, 5, -5]} color="#ff2d2d" intensity={4} distance={30} />
        <pointLight position={[10, 5, 5]} color="#00ffff" intensity={4} distance={30} />
        <pointLight position={[0, 8, 10]} color="#f0f0f0" intensity={2} distance={20} />

        {/* Cool Neon Background Elements */}
        {/* Floating Neon Dust/Particles */}
        <Sparkles count={400} scale={40} size={4} speed={0.4} color="#00ffff" opacity={0.6} />
        <Sparkles count={300} scale={40} size={3} speed={0.6} color="#ff2d2d" opacity={0.6} />

        {/* Synthwave Neon Grid Floor */}
        <Grid
          position={[0, -4, 0]}
          args={[80, 80]}
          cellSize={1.5}
          cellThickness={1.2}
          cellColor="#ff2d2d"
          sectionSize={6}
          sectionThickness={1.5}
          sectionColor="#00ffff"
          fadeDistance={50}
          fadeStrength={1.5}
        />

        {/* Render the 3 huge cars staggered */}
        <Suspense fallback={null}>
          {/* Left: Gulf 911 (slightly pushed back) */}
          <LegoCar 
            modelUrl="/models/3D-911-gulf.glb" 
            position={[-16, -1, -8]} 
            rotationSpeed={0.3}
            scale={8}
          />
          
          {/* Center: BW 911 (hero position) */}
          <LegoCar 
            modelUrl="/models/reference-3D-911-BW.glb" 
            position={[0, -1, 0]} 
            rotationSpeed={0.4}
            scale={8.5} // slightly larger hero
          />

          {/* Right: Pink Lambo (slightly pushed back) */}
          <LegoCar 
            modelUrl="/models/3D-pink-lambo.glb" 
            position={[16, -1, -8]} 
            rotationSpeed={0.5}
            scale={8}
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
