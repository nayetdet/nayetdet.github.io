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
        color={isDarkTheme ? '#ffffff' : '#1d4ed8'}
        highlightColor={isDarkTheme ? '#ffffff' : '#0ea5e9'}
        lineCount={isDarkTheme ? 58 : 50}
        lineWidth={isDarkTheme ? 1.3 : 1.05}
        opacity={isDarkTheme ? 0.9 : 0.75}
        speed={0.16}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,transparent_42%,rgba(0,0,0,0.32)_100%)] dark:bg-[radial-gradient(circle_at_50%_45%,transparent_0%,transparent_48%,rgba(0,0,0,0.58)_100%)]" />
    </div>
  );
};
