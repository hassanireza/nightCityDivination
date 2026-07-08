import { CardOrientation } from '@/models/ArcanaCard';

export interface JournalEntry {
  id: string;
  cardId: number;
  cardName: string;
  orientation: CardOrientation;
  timestamp: number;
  context: 'single' | 'spread-past' | 'spread-present' | 'spread-future';
}

const STORAGE_KEY = 'arcana.reading-history.v1';
const MAX_ENTRIES = 50;

/**
 * ReadingHistory persists a rolling journal of past pulls to
 * localStorage. This is a feature upgrade over the original site,
 * which had no memory of previous draws. All storage access is
 * isolated inside this class so components never touch the browser
 * storage API directly.
 */
export class ReadingHistory {
  private entries: JournalEntry[];

  constructor() {
    this.entries = ReadingHistory.load();
  }

  public get all(): readonly JournalEntry[] {
    return this.entries;
  }

  public get count(): number {
    return this.entries.length;
  }

  public record(entry: Omit<JournalEntry, 'id' | 'timestamp'>): JournalEntry {
    const fullEntry: JournalEntry = {
      ...entry,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      timestamp: Date.now()
    };
    this.entries = [fullEntry, ...this.entries].slice(0, MAX_ENTRIES);
    this.persist();
    return fullEntry;
  }

  public clear(): void {
    this.entries = [];
    this.persist();
  }

  private persist(): void {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.entries));
    } catch {
      // Storage may be unavailable in private browsing contexts.
      // Failing silently keeps the reading experience uninterrupted.
    }
  }

  private static load(): JournalEntry[] {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
}
