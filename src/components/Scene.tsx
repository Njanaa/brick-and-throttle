'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import LegoCar from './LegoCar';

interface SceneProps {
  scrollOffset: number;
}

export default function Scene({ scrollOffset }: SceneProps) {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 3.5, 14], fov: 40 }} // Zoomed out and repositioned to frame both cars cleanly
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={['#0a0a0f']} />

        {/* Ambient & Directional Lighting */}
        <ambientLight intensity={0.15} />
        <directionalLight position={[5, 10, 5]} intensity={0.4} />

        {/* Cyberpunk Neon Lights */}
        {/* Pink point light on the left side to illuminate the Pink Lamborghini */}
        <pointLight position={[-6, 3, -2]} color="#ff33aa" intensity={2.5} distance={25} />
        
        {/* Red point light on the right side to illuminate the Porsche RSR */}
        <pointLight position={[6, 2, 2]} color="#ff2d2d" intensity={2.5} distance={25} />
        
        {/* Cyan accent spotlight hitting from the center top */}
        <spotLight position={[0, 8, 3]} angle={0.4} penumbra={1} intensity={2} color="#00ffff" />

        <Suspense fallback={null}>
          <group position={[0, -0.2, 0]}>
            {/* 1. Pink Lamborghini Supercar (Background Left) */}
            <LegoCar 
              scrollOffset={scrollOffset} 
              carType="lamborghini" 
              emissiveColor="#ff33aa" 
              position={[-2.2, 0.4, -2.2]} // Moved slightly further left/back to fit camera view
            />
            
            {/* 2. Porsche 911 RSR Classic (Foreground Right) */}
            <LegoCar 
              scrollOffset={scrollOffset} 
              carType="porsche" 
              emissiveColor="#ff2d2d" 
              position={[2.0, -0.2, 1.2]} // Moved slightly further right/front for separation
            />
          </group>
        </Suspense>

        {/* Post-processing Bloom */}
        <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceThreshold={1}
            luminanceSmoothing={0.3}
            intensity={1.5}
            radius={0.8}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
