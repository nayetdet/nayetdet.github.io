import { useEffect, useState, type ElementType } from 'react';

interface UseLoadingReturn {
  isLoading: boolean;
  isHeroVisible: boolean;
  markHeroReady: (isReady: boolean) => void;
  markHeroIntroComplete: (isComplete: boolean) => void;
}

export const useLoading = (
  sections: readonly ElementType[],
): UseLoadingReturn => {
  const [areSectionsReady, setAreSectionsReady] = useState(false);
  const [isHeroReady, setIsHeroReady] = useState(false);
  const [isHeroIntroComplete, setIsHeroIntroComplete] = useState(false);

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
        void document.fonts.ready.then(() => setAreSectionsReady(true));
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
    isLoading: !isHeroIntroComplete,
    isHeroVisible: areSectionsReady && isHeroReady,
    markHeroReady: setIsHeroReady,
    markHeroIntroComplete: setIsHeroIntroComplete,
  };
};

export default useLoading;
