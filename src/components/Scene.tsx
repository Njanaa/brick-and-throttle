'use client';

import { useRef, useEffect } from 'react';

interface SceneProps {
  scrollOffset: number;
}

export default function Scene({ scrollOffset }: SceneProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current || !containerRef.current) return;

    // Scroll-driven parallax: zoom in + slight upward drift + fade out
    const zoomStart = 0.0;
    const zoomEnd = 0.5;
    const progress = Math.max(0, Math.min(1, (scrollOffset - zoomStart) / (zoomEnd - zoomStart)));

    // Scale from 1.0 to 1.4 as user scrolls
    const scale = 1 + progress * 0.4;
    // Slight upward drift
    const translateY = -progress * 15;
    // Fade out as user scrolls past
    const opacity = 1 - Math.pow(progress, 2);

    imageRef.current.style.transform = `scale(${scale}) translateY(${translateY}%)`;
    imageRef.current.style.opacity = `${opacity}`;

    // Vignette intensifies on scroll
    containerRef.current.style.background = `
      radial-gradient(
        ellipse at 50% 60%,
        transparent ${40 - progress * 20}%,
        rgba(10, 10, 15, ${0.4 + progress * 0.5}) 70%,
        rgba(10, 10, 15, 1) 100%
      )
    `;
  }, [scrollOffset]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        overflow: 'hidden',
        backgroundColor: '#0a0a0f',
      }}
    >
      {/* Real product image */}
      <div
        ref={imageRef}
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/hero-cars.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 55%',
          backgroundRepeat: 'no-repeat',
          transformOrigin: 'center center',
          willChange: 'transform, opacity',
          transition: 'transform 0.05s linear',
        }}
      />

      {/* Cinematic vignette overlay */}
      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Bottom gradient fade to page background */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: 'linear-gradient(to top, #0a0a0f 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
    </div>
  );
}
