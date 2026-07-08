import { useCallback, useMemo, useState } from 'react';
import { ReadingHistory, type JournalEntry } from '@/models/ReadingHistory';

export interface UseReadingHistoryResult {
  entries: readonly JournalEntry[];
  record: (entry: Omit<JournalEntry, 'id' | 'timestamp'>) => void;
  clear: () => void;
}

/** Bridges the ReadingHistory model into React state. */
export function useReadingHistory(): UseReadingHistoryResult {
  const history = useMemo(() => new ReadingHistory(), []);
  const [entries, setEntries] = useState<readonly JournalEntry[]>(history.all);

  const record = useCallback<UseReadingHistoryResult['record']>(
    (entry) => {
      history.record(entry);
      setEntries([...history.all]);
    },
    [history]
  );

  const clear = useCallback(() => {
    history.clear();
    setEntries([...history.all]);
  }, [history]);

  return { entries, record, clear };
}
