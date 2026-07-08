import { useMemo, useState } from 'react';
import { ArcanaCard, ArcanaPath } from '@/models/ArcanaCard';
import { ArcanaDeck } from '@/models/ArcanaDeck';
import { ArcanaCardTile } from '@/components/arcana/ArcanaCardTile';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ArcanaGridSectionProps {
  deck: ArcanaDeck;
  onSelect: (card: ArcanaCard) => void;
}

type FilterKey = ArcanaPath | 'all';

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'ALL' },
  { key: ArcanaPath.Light, label: 'LIGHT PATH' },
  { key: ArcanaPath.Shadow, label: 'SHADOW PATH' },
  { key: ArcanaPath.Power, label: 'POWER' }
];

export function ArcanaGridSection({ deck, onSelect }: ArcanaGridSectionProps): JSX.Element {
  const [filter, setFilter] = useState<FilterKey>('all');
  const [query, setQuery] = useState('');
  const headerRef = useScrollReveal<HTMLDivElement>();

  const cards = useMemo(() => deck.filter(filter, query), [deck, filter, query]);

  return (
    <section className="arcana-grid-section" id="arcana">
      <div className="section-header" ref={headerRef}>
        <div className="section-tag">// MAJOR ARCANA CODEX</div>
        <h2 className="section-title">
          CHOOSE YOUR <span className="accent-text">READING</span>
        </h2>
        <p className="section-desc">
          Each arcana carries a signal from the net. Touch a card to receive its transmission.
        </p>
      </div>

      <div className="arcana-toolbar">
        <div className="arcana-filter">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`filter-btn${filter === f.key ? ' active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="arcana-search">
          <span className="arcana-search-icon" aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Search keyword or archetype"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search the arcana codex"
          />
        </div>
      </div>

      <div className="arcana-grid" id="arcana-grid">
        {cards.length === 0 ? (
          <div className="arcana-empty-state">NO SIGNAL MATCHES YOUR QUERY</div>
        ) : (
          cards.map((card, i) => (
            <ArcanaCardTile key={card.id} card={card} index={i} onSelect={onSelect} />
          ))
        )}
      </div>
    </section>
  );
}
