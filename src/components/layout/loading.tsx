import { useLayoutEffect, useRef, type ReactElement } from 'react';
import gsap from 'gsap';

interface LoadingProps {
  isVisible: boolean;
}

export const Loading = ({ isVisible }: LoadingProps): ReactElement => {
  const loaderRef = useRef<HTMLOutputElement>(null);

  useLayoutEffect((): (() => void) | undefined => {
    const loader = loaderRef.current;
    if (!loader) {
      return undefined;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(
        loader,
        isVisible
          ? { autoAlpha: 1, clipPath: 'circle(150% at 50% 50%)' }
          : { autoAlpha: 0 },
      );

      return undefined;
    }

    const timeline = gsap.timeline();
    if (isVisible) {
      timeline.set(loader, {
        autoAlpha: 1,
        clipPath: 'circle(150% at 50% 50%)',
      });

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
        .fromTo(
          '[data-loading-wave]',
          { autoAlpha: 0, strokeDasharray: 240, strokeDashoffset: 240 },
          {
            autoAlpha: 0.85,
            duration: 0.9,
            ease: 'power2.out',
            strokeDashoffset: 0,
          },
          '-=0.45',
        )
        .to(
          '[data-loading-name]',
          { duration: 1.4, ease: 'sine.inOut', repeat: -1, y: -4, yoyo: true },
          '-=0.55',
        )
        .to(
          '[data-loading-wave]',
          { duration: 1.8, ease: 'sine.inOut', repeat: -1, x: 10, yoyo: true },
          '<',
        );
    } else {
      timeline
        .to('[data-loading-content]', {
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
            duration: 1.1,
            ease: 'power4.inOut',
          },
          '<0.1',
        )
        .set(loader, { autoAlpha: 0 });
    }

    return (): void => {
      timeline.kill();
    };
  }, [isVisible]);

  return (
    <output
      ref={loaderRef}
      aria-live="polite"
      aria-hidden={!isVisible}
      className={`fixed inset-0 z-100 flex items-center justify-center bg-white dark:bg-black ${
        isVisible ? '' : 'pointer-events-none'
      }`}
    >
      <span data-loading-content className="inline-flex flex-col items-center">
        <span
          data-loading-name
          className="inline-block text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] font-semibold tracking-[-0.055em]"
        >
          João Pedro
        </span>
        <svg
          className="mt-5 h-5 w-full overflow-visible text-[#1d4ed8]/70 dark:text-[#858585]"
          viewBox="0 0 240 20"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            data-loading-wave
            d="M0 10C20 10 20 4 40 4S60 16 80 16s20-12 40-12 20 12 40 12 20-12 40-12 20 6 40 6"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </output>
  );
};

export default Loading;
