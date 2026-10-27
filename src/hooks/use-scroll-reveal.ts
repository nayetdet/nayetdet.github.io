import { useLayoutEffect, type RefObject } from 'react';
import gsap from 'gsap';

interface ScrollRevealOptions {
  scale?: number;
  stagger?: number;
  y?: number;
}

export const useScrollReveal = (
  scope: RefObject<HTMLElement | null>,
  selector: string,
  { scale = 1, stagger = 0.1, y = 24 }: ScrollRevealOptions = {},
): void => {
  useLayoutEffect((): (() => void) | undefined => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const elements = Array.from(
      scope.current?.querySelectorAll<HTMLElement>(selector) ?? [],
    );
    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          gsap.to(entry.target, {
            autoAlpha: 1,
            delay: elements.indexOf(entry.target as HTMLElement) * stagger,
            duration: 0.5,
            ease: 'power3.out',
            y: 0,
            scale: 1,
            clearProps: 'opacity,transform,visibility',
          });
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px 10%' },
    );

    elements.forEach((target): void => {
      gsap.set(target, { autoAlpha: 0, scale, y });
      observer.observe(target);
    });

    return (): void => {
      observer.disconnect();
      gsap.killTweensOf(elements);
      gsap.set(elements, { clearProps: 'transform,opacity,visibility' });
    };
  }, [scale, scope, selector, stagger, y]);
};

export default useScrollReveal;
