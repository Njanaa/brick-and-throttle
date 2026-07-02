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
        camera={{ position: [0, 2, 8], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={['#0a0a0f']} />

        {/* Lighting */}
        <ambientLight intensity={0.15} />
        <pointLight position={[-5, 3, -3]} color="#ff2d2d" intensity={2} distance={20} />
        <pointLight position={[5, 3, 3]} color="#00ffff" intensity={1.5} distance={20} />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />

        <Suspense fallback={null}>
          <LegoCar scrollOffset={scrollOffset} />
        </Suspense>

        {/* Post-processing */}
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
