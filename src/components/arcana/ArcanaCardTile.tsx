import { ArcanaCard } from '@/models/ArcanaCard';
import { CardImage } from '@/components/common/CardImage';

interface ArcanaCardTileProps {
  card: ArcanaCard;
  index: number;
  onSelect: (card: ArcanaCard) => void;
}

export function ArcanaCardTile({ card, index, onSelect }: ArcanaCardTileProps): JSX.Element {
  return (
    <button
      type="button"
      className="arcana-card"
      style={{ animationDelay: `${index * 0.04}s` }}
      onClick={() => onSelect(card)}
      aria-label={`Reveal reading for ${card.name}`}
    >
      <div className="arcana-card-frame">
        <CardImage avifSrc={card.avifSrc} webpSrc={card.webpSrc} alt={card.name} loading="lazy" />
        <div className="arcana-card-overlay">
          <div className="arcana-card-number">{card.roman}</div>
          <div className="arcana-card-name">{card.displayName}</div>
        </div>
      </div>
      <div
        className="arcana-card-glow"
        style={{ background: `radial-gradient(circle, ${card.glow} 0%, transparent 70%)` }}
      />
      <div className="arcana-card-label">{card.name}</div>
      <div className="arcana-card-num-label">{card.roman}</div>
    </button>
  );
}
