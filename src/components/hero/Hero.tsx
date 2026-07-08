import { useEffect, useRef } from 'react';
import { ArcanaCard } from '@/models/ArcanaCard';
import { useTypewriter } from '@/hooks/useTypewriter';

interface HeroProps {
  leftCard: ArcanaCard;
  centerCard: ArcanaCard;
  rightCard: ArcanaCard;
  dailyCard: ArcanaCard;
  onDraw: () => void;
  onSpread: () => void;
  onOpenDaily: () => void;
}

const SUBTITLE =
  "The cards don't lie, choom. Twenty two archetypes submerged in the neural net, each one a drowned mirror reflecting the chrome and flesh of who you truly are.";

export function Hero({
  leftCard,
  centerCard,
  rightCard,
  dailyCard,
  onDraw,
  onSpread,
  onOpenDaily
}: HeroProps): JSX.Element {
  const typedSubtitle = useTypewriter(SUBTITLE);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const handleMove = (event: MouseEvent): void => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      if (leftRef.current) {
        leftRef.current.style.transform = `rotate(-12deg) translateX(${-20 + x * 10}px) translateY(${y * 8}px) scale(0.8)`;
      }
      if (rightRef.current) {
        rightRef.current.style.transform = `rotate(12deg) translateX(${20 + x * 10}px) translateY(${y * 8}px) scale(0.8)`;
      }
    };

    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section className="hero">
      <div className="hero-ambient" aria-hidden="true">
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">CATHEDRAL OF WATER | MAJOR ARCANA</span>
          <span className="eyebrow-line" />
        </div>

        <h1 className="hero-title">
          <span className="title-jp">運命を</span>
          <span className="title-main">
            READ YOUR
            <br />
            <em>FATE</em>
          </span>
          <span className="title-jp title-jp-right">解読せよ</span>
        </h1>

        <p className="hero-subtitle" style={{ opacity: 1 }}>
          {typedSubtitle}
        </p>

        <button
          type="button"
          className="daily-card-banner"
          onClick={onOpenDaily}
        >
          <span aria-hidden="true">◈</span>
          <span>
            CARD OF THE DAY: <strong>{dailyCard.displayName}</strong>
          </span>
        </button>

        <div className="hero-cta-group">
          <button className="btn-primary" id="draw-btn" onClick={onDraw}>
            <span className="btn-bg-glow" />
            <span className="btn-icon" aria-hidden="true">✦</span>
            <span>DRAW YOUR CARD</span>
            <span className="btn-corner btn-corner-tl" />
            <span className="btn-corner btn-corner-tr" />
            <span className="btn-corner btn-corner-bl" />
            <span className="btn-corner btn-corner-br" />
          </button>
          <button className="btn-secondary" id="spread-btn" onClick={onSpread}>
            <span>FULL SPREAD</span>
          </button>
        </div>

        <div className="hero-meta">
          <div className="meta-item">
            <span className="meta-val">22</span>
            <span className="meta-label">Major Arcana</span>
          </div>
          <div className="meta-divider" aria-hidden="true">⬡</div>
          <div className="meta-item">
            <span className="meta-val">∞</span>
            <span className="meta-label">Readings</span>
          </div>
          <div className="meta-divider" aria-hidden="true">⬡</div>
          <div className="meta-item">
            <span className="meta-val">01</span>
            <span className="meta-label">Destiny</span>
          </div>
        </div>
      </div>

      <div className="hero-cards-showcase" aria-hidden="true">
        <div className="showcase-card showcase-card-left" ref={leftRef}>
          <img src={leftCard.imageSrc} alt="" />
          <div className="card-glow card-glow-blue" />
        </div>
        <div className="showcase-card showcase-card-center" id="hero-center-card">
          <div className="card-inner">
            <div className="card-back">
              <div className="card-back-pattern">
                <div className="back-symbol">⬡</div>
                <div className="back-corners">
                  <span></span><span></span><span></span><span></span>
                </div>
              </div>
            </div>
            <div className="card-front">
              <img src={centerCard.imageSrc} alt="" />
            </div>
          </div>
          <div className="card-glow card-glow-purple" />
        </div>
        <div className="showcase-card showcase-card-right" ref={rightRef}>
          <img src={rightCard.imageSrc} alt="" />
          <div className="card-glow card-glow-red" />
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span className="scroll-line" />
        <span className="scroll-text">SCROLL TO EXPLORE</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}
