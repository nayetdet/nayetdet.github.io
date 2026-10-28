import { useLayoutEffect, useRef, type ReactElement } from 'react';
import gsap from 'gsap';

interface LoadingProps {
  isVisible: boolean;
  onExitStart: (isVisible: boolean) => void;
}

export const Loading = ({
  isVisible,
  onExitStart,
}: LoadingProps): ReactElement => {
  const loaderRef = useRef<HTMLOutputElement>(null);

  useLayoutEffect((): (() => void) | undefined => {
    const loader = loaderRef.current;
    if (!loader) {
      return undefined;
    }

    const timeline = gsap.timeline();
    const shouldReduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (isVisible) {
      timeline.set(loader, {
        autoAlpha: 1,
        clipPath: 'circle(150% at 50% 50%)',
      });

      if (!shouldReduceMotion) {
        timeline
          .fromTo(
            '[data-loading-name]',
            { autoAlpha: 0, clipPath: 'inset(0 100% 0 0)', x: -16 },
            {
              autoAlpha: 1,
              clipPath: 'inset(0 0% 0 0)',
              duration: 0.8,
              ease: 'power4.out',
              x: 0,
            },
          )
          .to('[data-loading-name]', {
            duration: 1.4,
            ease: 'sine.inOut',
            repeat: -1,
            y: -4,
            yoyo: true,
          });
      }
    } else {
      onExitStart(true);

      if (shouldReduceMotion) {
        timeline.set(loader, { autoAlpha: 0 });
      } else {
        timeline
          .to('[data-loading-name]', {
            autoAlpha: 0,
            duration: 0.3,
            ease: 'power3.in',
            scale: 0.94,
            y: -20,
          })
          .to(
            loader,
            {
              clipPath: 'circle(0% at 50% 50%)',
              duration: 0.75,
              ease: 'power4.inOut',
            },
            '<0.1',
          )
          .set(loader, { autoAlpha: 0 });
      }
    }

    return (): void => {
      timeline.kill();
    };
  }, [isVisible, onExitStart]);

  return (
    <output
      ref={loaderRef}
      aria-live="polite"
      aria-hidden={!isVisible}
      className={`fixed inset-0 z-100 flex items-center justify-center bg-white dark:bg-black ${
        isVisible ? '' : 'pointer-events-none'
      }`}
    >
      <span
        data-loading-name
        className="inline-block text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] font-semibold tracking-[-0.055em]"
      >
        João Pedro
      </span>
    </output>
  );
};

export default Loading;
