import type { ReactElement } from 'react';
import { LineWaves } from '@/components/ui/line-waves';

interface HeroBackgroundProps {
  isDarkTheme: boolean;
}

export const HeroBackground = ({
  isDarkTheme,
}: HeroBackgroundProps): ReactElement => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <LineWaves
        key={isDarkTheme ? 'dark-waves' : 'light-waves'}
        className="pointer-events-none absolute inset-0 size-full"
        color={isDarkTheme ? '#858585' : '#1d4ed8'}
        highlightColor={isDarkTheme ? '#aaaaaa' : '#0ea5e9'}
        lineCount={34}
        lineWidth={isDarkTheme ? 1.3 : 1.05}
        opacity={isDarkTheme ? 0.8 : 0.75}
        baseIntensity={isDarkTheme ? 0.82 : undefined}
        speed={0.16}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,transparent_42%,rgba(0,0,0,0.32)_100%)] dark:bg-[radial-gradient(circle_at_50%_45%,transparent_0%,transparent_48%,rgba(0,0,0,0.58)_100%)]" />
    </div>
  );
};
