import { useCallback, useMemo, useState } from 'react';
import { BackgroundEffects } from '@/components/layout/BackgroundEffects';
import { NavBar } from '@/components/nav/NavBar';
import { Hero } from '@/components/hero/Hero';
import { SectionDivider } from '@/components/SectionDivider';
import { ArcanaGridSection } from '@/components/arcana/ArcanaGridSection';
import { ReadingModal } from '@/components/reading/ReadingModal';
import { SpreadModal } from '@/components/spread/SpreadModal';
import { LoreSection } from '@/components/lore/LoreSection';
import { Footer } from '@/components/Footer';
import { HistoryDrawer } from '@/components/history/HistoryDrawer';
import { useArcanaDeck } from '@/hooks/useArcanaDeck';
import { useReadingHistory } from '@/hooks/useReadingHistory';
import { ArcanaCard, CardOrientation } from '@/models/ArcanaCard';
import type { DrawnCard } from '@/models/ArcanaDeck';

type ActiveModal = 'reading' | 'spread' | null;

export default function App(): JSX.Element {
  const deck = useArcanaDeck();
  const { entries, record, clear } = useReadingHistory();

  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [activeReading, setActiveReading] = useState<DrawnCard | null>(null);
  const [historyOpen, setHistoryOpen] = useState(false);

  const dailyCard = useMemo(() => deck.cardOfTheDay(), [deck]);
  const heroLeft = deck.findById(2) as ArcanaCard;
  const heroCenter = deck.findById(0) as ArcanaCard;
  const heroRight = deck.findById(4) as ArcanaCard;
  const empress = deck.findById(3) as ArcanaCard;
  const highPriestess = heroLeft;
  const emperor = heroRight;

  const openReading = useCallback(
    (drawn: DrawnCard) => {
      setActiveReading(drawn);
      setActiveModal('reading');
      record({
        cardId: drawn.card.id,
        cardName: drawn.card.name,
        orientation: drawn.orientation,
        context: 'single'
      });
    },
    [record]
  );

  const handleDrawRandom = useCallback(() => {
    openReading(deck.drawRandom());
  }, [deck, openReading]);

  const handleSelectCard = useCallback(
    (card: ArcanaCard) => {
      const orientation = Math.random() < 0.5 ? CardOrientation.Upright : CardOrientation.Reversed;
      openReading({ card, orientation });
    },
    [openReading]
  );

  const handleOpenDaily = useCallback(() => {
    openReading(dailyCard);
  }, [dailyCard, openReading]);

  const handleOpenSpread = useCallback(() => {
    setActiveModal('spread');
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveModal(null);
    setActiveReading(null);
  }, []);

  const handleDrawSpread = useCallback(() => {
    const spread = deck.drawSpread();
    record({
      cardId: spread.past.card.id,
      cardName: spread.past.card.name,
      orientation: spread.past.orientation,
      context: 'spread-past'
    });
    record({
      cardId: spread.present.card.id,
      cardName: spread.present.card.name,
      orientation: spread.present.orientation,
      context: 'spread-present'
    });
    record({
      cardId: spread.future.card.id,
      cardName: spread.future.card.name,
      orientation: spread.future.orientation,
      context: 'spread-future'
    });
    return spread;
  }, [deck, record]);

  return (
    <>
      <BackgroundEffects />
      <NavBar />

      <Hero
        leftCard={heroLeft}
        centerCard={heroCenter}
        rightCard={heroRight}
        dailyCard={dailyCard.card}
        onDraw={handleDrawRandom}
        onSpread={handleOpenSpread}
        onOpenDaily={handleOpenDaily}
      />

      <SectionDivider />

      <ArcanaGridSection deck={deck} onSelect={handleSelectCard} />

      <LoreSection empress={empress} highPriestess={highPriestess} emperor={emperor} />

      <Footer />

      <button
        type="button"
        className="history-trigger"
        onClick={() => setHistoryOpen(true)}
      >
        <span aria-hidden="true">📜</span>
        <span>JOURNAL</span>
        {entries.length > 0 && <span className="history-count">{entries.length}</span>}
      </button>

      {activeModal === 'reading' && activeReading && (
        <ReadingModal
          card={activeReading.card}
          orientation={activeReading.orientation}
          onClose={handleCloseModal}
          onDrawAgain={handleDrawRandom}
          onViewSpread={() => {
            setActiveModal('spread');
            setActiveReading(null);
          }}
        />
      )}

      {activeModal === 'spread' && (
        <SpreadModal onClose={handleCloseModal} onDraw={handleDrawSpread} />
      )}

      {historyOpen && (
        <HistoryDrawer
          entries={entries}
          deck={deck}
          onClose={() => setHistoryOpen(false)}
          onClear={clear}
        />
      )}
    </>
  );
}
