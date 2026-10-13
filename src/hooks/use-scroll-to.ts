import { useCallback } from 'react';
import type { SectionId } from '@/constants/sections';

export interface UseScrollToReturn {
  scrollTo: (targetId: SectionId) => void;
}

export function useScrollTo(): UseScrollToReturn {
  const scrollTo = useCallback((targetId: SectionId): void => {
    const target: HTMLElement | null = document.getElementById(targetId);
    if (!target) {
      return;
    }

    const hash = `#${targetId}`;
    if (window.location.hash !== hash) {
      window.history.pushState(null, '', hash);
    }

    target.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
      block: 'start',
    });
  }, []);

  return { scrollTo };
}
