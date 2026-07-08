import { useRef, useState } from 'react';
import { DrawnCard, SPREAD_POSITIONS } from '@/models/ArcanaDeck';
import { CardOrientation } from '@/models/ArcanaCard';
import { useFocusTrap } from '@/hooks/useFocusTrap';

interface SpreadModalProps {
  onClose: () => void;
  onDraw: () => Record<'past' | 'present' | 'future', DrawnCard>;
}

export function SpreadModal({ onClose, onDraw }: SpreadModalProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [result, setResult] = useState<Record<'past' | 'present' | 'future', DrawnCard> | null>(null);
  const [revealed, setRevealed] = useState(false);

  useFocusTrap(containerRef, true, onClose);

  const handleReveal = (): void => {
    const spread = onDraw();
    setResult(spread);
    setRevealed(false);
    window.setTimeout(() => setRevealed(true), 1000);
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <section
        className="spread-section"
        role="dialog"
        aria-modal="true"
        aria-labelledby="spread-title"
        ref={containerRef}
      >
        <button type="button" className="spread-close" onClick={onClose}>
          ✕ RETURN
        </button>

        <div className="spread-title-area">
          <div className="section-tag">// THREE CARD SPREAD</div>
          <h2 className="section-title" id="spread-title">
            YOUR <span className="accent-text">FATE MATRIX</span>
          </h2>
        </div>

        <div className="spread-layout">
          {SPREAD_POSITIONS.map((pos) => {
            const drawn = result?.[pos.key];
            const isReversed = drawn?.orientation === CardOrientation.Reversed;
            return (
              <div
                key={pos.key}
                className={`spread-position${pos.key === 'present' ? ' spread-position-center' : ''}`}
              >
                <div className={`spread-card-slot${drawn ? ' has-card' : ''}`}>
                  <div className="slot-glow" />
                  {drawn ? (
                    <img
                      src={drawn.card.imageSrc}
                      alt={drawn.card.name}
                      className={isReversed ? 'is-reversed' : ''}
                    />
                  ) : (
                    <div className="slot-icon">?</div>
                  )}
                </div>
                <div className="spread-label">
                  {pos.label}
                  <br />
                  <span>{pos.hint}</span>
                </div>
              </div>
            );
          })}
        </div>

        <button type="button" className="btn-primary spread-draw-btn" onClick={handleReveal}>
          <span className="btn-bg-glow" />
          <span>✦ REVEAL THE SPREAD</span>
        </button>

        {result && revealed && (
          <div className="spread-reading">
            <div className="spread-cards-row">
              {SPREAD_POSITIONS.map((pos) => (
                <div className="spread-card-mini" key={pos.key}>
                  <img src={result[pos.key].card.imageSrc} alt={result[pos.key].card.name} />
                  <div className="spread-card-mini-name">{result[pos.key].card.displayName}</div>
                  <div className="spread-card-mini-pos">{pos.label}</div>
                </div>
              ))}
            </div>
            <p className="spread-summary">
              Your past carries the energy of{' '}
              <strong style={{ color: 'var(--gold)' }}>{result.past.card.name}</strong>:{' '}
              {result.past.card.meaningFor(result.past.orientation)} The present moment holds{' '}
              <strong style={{ color: 'var(--gold)' }}>{result.present.card.name}</strong>:{' '}
              {result.present.card.meaningFor(result.present.orientation)} The path forward is
              shaped by{' '}
              <strong style={{ color: 'var(--gold)' }}>{result.future.card.name}</strong>:{' '}
              {result.future.card.meaningFor(result.future.orientation)}
            </p>
          </div>
        )}
      </section>
    </>
  );
}
