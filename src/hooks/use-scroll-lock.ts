import { useEffect, type EffectCallback } from 'react';

export function useScrollLock(locked: boolean): void {
  const lockEffect: EffectCallback = (): (() => void) | undefined => {
    if (!locked) {
      return undefined;
    }

    const previousBodyOverflow: string = document.body.style.overflow;
    const previousDocumentOverflow: string =
      document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return (): void => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
    };
  };

  useEffect(lockEffect, [locked]);
}
