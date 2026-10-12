export interface UseScrollToReturn {
  scrollTo: (targetId: string) => void;
}

export function useScrollTo(): UseScrollToReturn {
  const scrollTo = (targetId: string): void => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return { scrollTo };
}
