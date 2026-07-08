import { useMemo } from 'react';
import { ArcanaDeck } from '@/models/ArcanaDeck';

/** Provides a single, stable ArcanaDeck instance for the app lifetime. */
export function useArcanaDeck(): ArcanaDeck {
  return useMemo(() => new ArcanaDeck(), []);
}
