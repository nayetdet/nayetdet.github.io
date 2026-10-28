import { useEffect, useState, type ElementType } from 'react';

interface UseLoadingReturn {
  isLoading: boolean;
  isHeroVisible: boolean;
  markHeroReady: (isReady: boolean) => void;
  revealHero: (isVisible: boolean) => void;
}

export const useLoading = (
  sections: readonly ElementType[],
): UseLoadingReturn => {
  const [areSectionsReady, setAreSectionsReady] = useState(false);
  const [isHeroReady, setIsHeroReady] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect((): (() => void) | undefined => {
    const container = document.querySelector('#smooth-content');
    if (!container) {
      return undefined;
    }

    const finishLoading = (observer: MutationObserver): void => {
      if (
        document.querySelectorAll('#smooth-content main > section').length ===
          sections.length &&
        document.querySelector('#smooth-content > footer')
      ) {
        observer.disconnect();
        setAreSectionsReady(true);
      }
    };

    const observer = new MutationObserver((_, target): void =>
      finishLoading(target),
    );

    observer.observe(container, { childList: true, subtree: true });
    finishLoading(observer);

    return (): void => {
      observer.disconnect();
    };
  }, [sections]);

  return {
    isLoading: !areSectionsReady || !isHeroReady,
    isHeroVisible,
    markHeroReady: setIsHeroReady,
    revealHero: setIsHeroVisible,
  };
};

export default useLoading;
