export const scrollTo = (targetId: string): void => {
  const scroll = (): HTMLElement | null => {
    const target: HTMLElement | null = document.getElementById(targetId);

    target?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });

    return target;
  };

  if (scroll()) {
    return;
  }

  const observer = new MutationObserver(() => {
    if (scroll()) {
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
  window.setTimeout(() => observer.disconnect(), 5000);
};
