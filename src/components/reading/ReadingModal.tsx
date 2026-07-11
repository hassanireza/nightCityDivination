import { useRef } from 'react';
import { ArcanaCard, CardOrientation } from '@/models/ArcanaCard';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { CardImage } from '@/components/common/CardImage';

interface ReadingModalProps {
  card: ArcanaCard;
  orientation: CardOrientation;
  onClose: () => void;
  onDrawAgain: () => void;
  onViewSpread: () => void;
}

export function ReadingModal({
  card,
  orientation,
  onClose,
  onDrawAgain,
  onViewSpread
}: ReadingModalProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  useFocusTrap(containerRef, true, onClose);

  const isReversed = orientation === CardOrientation.Reversed;
  const meaning = card.meaningFor(orientation);

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <section
        className="reading-section"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reading-title"
        ref={containerRef}
      >
        <div className="reading-ambient" />
        <div className="reading-container">
          <button type="button" className="reading-close" onClick={onClose}>
            ✕ CLOSE
          </button>

          <div className="reading-layout">
            <div className="reading-card-display">
              <div className="reading-card-wrap">
                <div className={`reading-card-frame${isReversed ? ' is-reversed' : ''}`}>
                  <CardImage avifSrc={card.avifSrc} webpSrc={card.webpSrc} alt={card.name} loading="eager" />
                  <div
                    className="reading-card-glow"
                    style={{ background: `radial-gradient(circle, ${card.glow} 0%, transparent 70%)` }}
                  />
                </div>
              </div>
              <div className="reading-card-number">{card.roman}</div>
            </div>

            <div className="reading-content">
              <div className="reading-tag">MAJOR ARCANA</div>
              <h2 className="reading-title" id="reading-title">{card.displayName}</h2>
              <div className="reading-subtitle">{card.archetype}</div>

              <div className={`orientation-badge${isReversed ? ' is-reversed' : ''}`}>
                <span aria-hidden="true">{isReversed ? '⤾' : '⤿'}</span>
                <span>{ArcanaCard.orientationLabel(orientation)}</span>
              </div>

              <div className="reading-oracle">
                <div className="oracle-header">
                  <span className="oracle-dot" />
                  <span>ORACLE TRANSMISSION</span>
                </div>
                <p className="oracle-text">{card.oracle}</p>
              </div>

              <div className="reading-aspects">
                <div className="aspect-grid">
                  <div className="aspect-item">
                    <div className="aspect-label">UPRIGHT</div>
                    <div className="aspect-value">{card.upright}</div>
                  </div>
                  <div className="aspect-item aspect-shadow">
                    <div className="aspect-label">REVERSED</div>
                    <div className="aspect-value">{card.reversed}</div>
                  </div>
                </div>
              </div>

              <p className="sr-only">Your active orientation this draw: {meaning}</p>

              <div className="reading-keywords">
                {card.keywords.map((kw) => (
                  <span className="keyword-tag" key={kw}>{kw}</span>
                ))}
              </div>

              <div className="reading-actions">
                <button className="btn-primary btn-sm" onClick={onDrawAgain}>
                  <span className="btn-bg-glow" />
                  <span>✦ DRAW AGAIN</span>
                </button>
                <button className="btn-secondary btn-sm" onClick={onViewSpread}>
                  <span>VIEW IN SPREAD</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
