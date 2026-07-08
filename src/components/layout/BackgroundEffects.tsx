import { useMemo } from 'react';
import { useParticleField } from '@/hooks/useParticleField';
import { RainField } from '@/models/RainField';

/**
 * Renders every fixed, non-interactive ambient layer: scanlines, film
 * grain, vignette, the parallax city skyline, animated rain, and the
 * particle canvas. Grouped here since none of these layers hold state
 * that other parts of the app need to read.
 */
export function BackgroundEffects(): JSX.Element {
  const canvasRef = useParticleField();
  const drops = useMemo(() => RainField.generate(80), []);

  return (
    <>
      <div className="scan-lines" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      <div className="condensation-overlay" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <canvas id="particle-canvas" ref={canvasRef} aria-hidden="true" />

      <div className="city-bg" aria-hidden="true">
        <div className="city-layer city-far" />
        <div className="city-layer city-mid" />
        <div className="city-layer city-near" />
        <div className="rain-container">
          {drops.map((drop) => (
            <div
              key={drop.key}
              className="rain-drop"
              style={{
                left: drop.left,
                height: drop.height,
                animationDuration: drop.animationDuration,
                animationDelay: drop.animationDelay,
                opacity: drop.opacity
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
