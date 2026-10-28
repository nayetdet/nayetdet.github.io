import { useLayoutEffect, type RefObject } from 'react';
import gsap from 'gsap';

interface ScrollRevealOptions {
  duration?: number;
  scale?: number;
  stagger?: number;
  y?: number;
}

export const useScrollReveal = (
  scope: RefObject<HTMLElement | null>,
  selector: string,
  {
    duration = 0.85,
    scale = 1,
    stagger = 0.075,
    y = 14,
  }: ScrollRevealOptions = {},
): void => {
  useLayoutEffect((): (() => void) | undefined => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const root = scope.current;
    const elements = Array.from(
      root?.querySelectorAll<HTMLElement>(selector) ?? [],
    );
    if (!root || !elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) {
          return;
        }

        gsap.to(elements, {
          autoAlpha: 1,
          duration,
          ease: 'power3.out',
          stagger,
          y: 0,
          scale: 1,
          clearProps: 'opacity,transform,visibility',
        });
        observer.disconnect();
      },
      { rootMargin: '0px 0px -12%' },
    );

    gsap.set(elements, { autoAlpha: 0, scale, y });
    observer.observe(root);

    return (): void => {
      observer.disconnect();
      gsap.killTweensOf(elements);
      gsap.set(elements, { clearProps: 'transform,opacity,visibility' });
    };
  }, [duration, scale, scope, selector, stagger, y]);
};

export default useScrollReveal;
