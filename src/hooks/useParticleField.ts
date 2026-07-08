import { useEffect, useRef, type RefObject } from 'react';
import { ParticleField } from '@/models/ParticleField';

/**
 * Mounts a ParticleField instance against a canvas ref, respecting the
 * user's reduced motion preference, and tears it down on unmount.
 */
export function useParticleField(): RefObject<HTMLCanvasElement> {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion || !canvasRef.current) return;

    const field = new ParticleField(canvasRef.current);
    field.start();

    const handleResize = (): void => field.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      field.stop();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return canvasRef;
}
