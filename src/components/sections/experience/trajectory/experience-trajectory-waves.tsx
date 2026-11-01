import { useLayoutEffect, useRef, type ReactElement } from 'react';
import gsap from 'gsap';
import { LineWaves } from '@/components/ui/line-waves';
import { useTheme, type UseThemeReturn } from '@/hooks/use-theme';

export const ExperienceTrajectoryWaves = (): ReactElement => {
  const { isDarkTheme }: UseThemeReturn = useTheme();
  const wavesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect((): (() => void) | undefined => {
    const canvas = wavesRef.current?.querySelector('canvas');
    if (
      !canvas ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined;
    }

    gsap.set(canvas, { autoAlpha: 0, filter: 'blur(4px)', x: 12 });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        gsap.to(canvas, {
          autoAlpha: 1,
          duration: 1.1,
          ease: 'power3.out',
          filter: 'blur(0px)',
          x: 0,
          clearProps: 'filter,opacity,transform,visibility',
        });
        observer.disconnect();
      },
      { rootMargin: '0px 0px 10%' },
    );

    observer.observe(canvas);
    return (): void => observer.disconnect();
  }, []);

  return (
    <div
      ref={wavesRef}
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[calc(50%-clamp(1.25rem,2.5vw,2.5rem))] overflow-hidden rounded-[4rem] lg:block"
    >
      <LineWaves
        key={isDarkTheme ? 'dark-trajectory-waves' : 'light-trajectory-waves'}
        className="size-full"
        color={isDarkTheme ? '#858585' : '#000000'}
        highlightColor={isDarkTheme ? '#858585' : '#000000'}
        lineCount={34}
        lineWidth={isDarkTheme ? 1.3 : 1.05}
        opacity={isDarkTheme ? 0.25 : 0.5}
        baseIntensity={1}
        shimmerIntensity={0}
        lineIntensityVariation={0.24}
        waveAmplitudeVariation={0.22}
        speed={0}
      />
    </div>
  );
};

export default ExperienceTrajectoryWaves;
