import { useRef } from 'react';
import { ArcanaDeck } from '@/models/ArcanaDeck';
import { JournalEntry } from '@/models/ReadingHistory';
import { CardOrientation } from '@/models/ArcanaCard';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { CardImage } from '@/components/common/CardImage';

interface HistoryDrawerProps {
  entries: readonly JournalEntry[];
  deck: ArcanaDeck;
  onClose: () => void;
  onClear: () => void;
}

const CONTEXT_LABEL: Record<JournalEntry['context'], string> = {
  single: 'Single draw',
  'spread-past': 'Spread: Past',
  'spread-present': 'Spread: Present',
  'spread-future': 'Spread: Future'
};

function formatTimestamp(ms: number): string {
  return new Date(ms).toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

export function HistoryDrawer({ entries, deck, onClose, onClear }: HistoryDrawerProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  useFocusTrap(containerRef, true, onClose);

  return (
    <>
      <div className="history-backdrop" onClick={onClose} />
      <aside
        className="history-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="history-title"
        ref={containerRef}
      >
        <div className="history-header">
          <h2 className="history-title" id="history-title">READING JOURNAL</h2>
          <button type="button" className="history-close" onClick={onClose}>
            ✕ CLOSE
          </button>
        </div>

        {entries.length > 0 && (
          <button type="button" className="history-clear" onClick={onClear}>
            CLEAR JOURNAL
          </button>
        )}

        {entries.length === 0 ? (
          <p className="history-empty">
            No transmissions logged yet. Draw a card to begin your journal.
          </p>
        ) : (
          <div className="history-list">
            {entries.map((entry) => {
              const card = deck.findById(entry.cardId);
              return (
                <div className="history-entry" key={entry.id}>
                  {card && (
                    <CardImage avifSrc={card.avifSrc} webpSrc={card.webpSrc} alt={entry.cardName} />
                  )}
                  <div className="history-entry-meta">
                    <div className="history-entry-name">
                      {entry.cardName}
                      {entry.orientation === CardOrientation.Reversed ? ' (Reversed)' : ''}
                    </div>
                    <div className="history-entry-detail">
                      {CONTEXT_LABEL[entry.context]} · {formatTimestamp(entry.timestamp)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </aside>
    </>
  );
}
