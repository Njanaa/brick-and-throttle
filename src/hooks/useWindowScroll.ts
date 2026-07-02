'use client';

import { useEffect, useState, useCallback } from 'react';

/**
 * Custom hook that reads window scroll position and returns
 * a normalized offset (0-1) based on total scrollable height.
 * Used instead of drei's useScroll to avoid createRoot conflicts.
 */
export function useWindowScroll() {
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      setOffset(Math.min(1, Math.max(0, scrollTop / docHeight)));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial read
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return offset;
}
