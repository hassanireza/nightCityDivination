import { ArcanaCard } from '@/models/ArcanaCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CardImage } from '@/components/common/CardImage';

interface LoreSectionProps {
  empress: ArcanaCard;
  highPriestess: ArcanaCard;
  emperor: ArcanaCard;
}

export function LoreSection({ empress, highPriestess, emperor }: LoreSectionProps): JSX.Element {
  const contentRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="lore-section" id="lore">
      <div className="lore-content" ref={contentRef}>
        <div className="lore-text-side">
          <div className="section-tag">// MISTY'S PARLOUR</div>
          <h2 className="lore-title">
            THE READER
            <br />
            <span className="accent-text">BETWEEN WORLDS</span>
          </h2>
          <p className="lore-body">
            In Night City, Misty Olszewski ran the esoteric shop next to Viktor's ripperdoc.
            She read tarot for V before every major push, cards laid out like a tithe paid
            to whatever's listening: fate as data, the universe as a flooded system to be decoded.
          </p>
          <p className="lore-body lore-body-jp">
            未来は静寂の中にある: <em>The future lives in silence, submerged.</em>
          </p>
          <div className="lore-divider">
            <span></span><span>⬡</span><span></span>
          </div>
          <p className="lore-body">
            This oracle carries that tradition into the net. Every card is a drowned mirror.
            Every reading is a transmission surfacing from black water. The arcana knows
            what you need to hear before you do.
          </p>
        </div>
        <div className="lore-visual-side">
          <div className="lore-card-stack">
            <div className="lore-card lore-card-3">
              <CardImage avifSrc={empress.avifSrc} webpSrc={empress.webpSrc} alt="" />
            </div>
            <div className="lore-card lore-card-2">
              <CardImage avifSrc={highPriestess.avifSrc} webpSrc={highPriestess.webpSrc} alt="" />
            </div>
            <div className="lore-card lore-card-1">
              <CardImage avifSrc={emperor.avifSrc} webpSrc={emperor.webpSrc} alt="" />
            </div>
          </div>
          <div className="lore-card-glow" />
        </div>
      </div>
    </section>
  );
}
