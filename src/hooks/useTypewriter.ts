import { useEffect, useState } from 'react';

/**
 * Reveals a string character by character, mirroring the hero subtitle
 * effect from the original site. Skips straight to the full text when the
 * user prefers reduced motion.
 */
export function useTypewriter(fullText: string, startDelayMs = 1200): string {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setVisibleText(fullText);
      return;
    }

    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const startTimeout = setTimeout(function type() {
      if (index < fullText.length) {
        index += 1;
        setVisibleText(fullText.slice(0, index));
        timeoutId = setTimeout(type, 20 + Math.random() * 15);
      }
    }, startDelayMs);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, [fullText, startDelayMs]);

  return visibleText;
}
