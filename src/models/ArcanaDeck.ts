import { ArcanaCard, ArcanaPath, CardOrientation } from '@/models/ArcanaCard';
import { ARCANA_SEED } from '@/data/arcanaSeed';

export interface DrawnCard {
  card: ArcanaCard;
  orientation: CardOrientation;
}

export interface SpreadPosition {
  key: 'past' | 'present' | 'future';
  label: string;
  hint: string;
}

export const SPREAD_POSITIONS: readonly SpreadPosition[] = [
  { key: 'past', label: 'PAST', hint: 'what shaped you' },
  { key: 'present', label: 'PRESENT', hint: 'what defines you' },
  { key: 'future', label: 'FUTURE', hint: 'what awaits you' }
];

/**
 * ArcanaDeck is the sole authority over the full 22 card Major Arcana
 * collection. It owns filtering, searching, orientation randomization and
 * weighted draws that favor cards which have not appeared recently, which
 * keeps repeated single-card draws feeling fresh across a session.
 */
export class ArcanaDeck {
  private readonly cards: readonly ArcanaCard[];
  private recentlyDrawnIds: number[] = [];
  private static readonly RECENCY_WINDOW = 6;

  constructor() {
    this.cards = ARCANA_SEED.map((seed) => new ArcanaCard(seed));
  }

  public get all(): readonly ArcanaCard[] {
    return this.cards;
  }

  public get size(): number {
    return this.cards.length;
  }

  public findById(id: number): ArcanaCard | undefined {
    return this.cards.find((c) => c.id === id);
  }

  public filter(pathFilter: ArcanaPath | 'all', query = ''): ArcanaCard[] {
    return this.cards.filter((c) => c.matchesPath(pathFilter) && c.matches(query));
  }

  /** Deterministic pseudo random orientation, roughly a coin flip. */
  private rollOrientation(): CardOrientation {
    return Math.random() < 0.5 ? CardOrientation.Upright : CardOrientation.Reversed;
  }

  /**
   * Draws a single random card, weighting the pool away from cards drawn
   * in the last few pulls so a session does not repeat the same arcana
   * back to back.
   */
  public drawRandom(): DrawnCard {
    const pool = this.cards.filter((c) => !this.recentlyDrawnIds.includes(c.id));
    const source = pool.length > 0 ? pool : this.cards;
    const card = source[Math.floor(Math.random() * source.length)];
    this.registerDraw(card.id);
    return { card, orientation: this.rollOrientation() };
  }

  /** Draws three distinct cards for the past, present, future spread. */
  public drawSpread(): Record<SpreadPosition['key'], DrawnCard> {
    const shuffled = [...this.cards].sort(() => Math.random() - 0.5).slice(0, 3);
    shuffled.forEach((c) => this.registerDraw(c.id));
    const [past, present, future] = shuffled;
    return {
      past: { card: past, orientation: this.rollOrientation() },
      present: { card: present, orientation: this.rollOrientation() },
      future: { card: future, orientation: this.rollOrientation() }
    };
  }

  /**
   * Deterministic card of the day. The same calendar day always resolves
   * to the same card and orientation so visitors see a stable daily pull
   * without any server side component.
   */
  public cardOfTheDay(date: Date = new Date()): DrawnCard {
    const seed = Number(
      `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`
    );
    const index = seed % this.cards.length;
    const orientation = seed % 2 === 0 ? CardOrientation.Upright : CardOrientation.Reversed;
    return { card: this.cards[index], orientation };
  }

  private registerDraw(id: number): void {
    this.recentlyDrawnIds.push(id);
    if (this.recentlyDrawnIds.length > ArcanaDeck.RECENCY_WINDOW) {
      this.recentlyDrawnIds.shift();
    }
  }
}
