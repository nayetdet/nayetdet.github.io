import type { ReactElement } from 'react';
import { WavyBackground } from '@/components/ui/wavy-background';

interface HeroBackgroundProps {
  isDarkTheme: boolean;
}

export const HeroBackground = ({
  isDarkTheme,
}: HeroBackgroundProps): ReactElement => {
  const colors: string[] = isDarkTheme
    ? ['#00e5ff', '#00a8ff', '#2563eb', '#00e676', '#14f195']
    : ['#0891b2', '#2563eb', '#4f46e5', '#059669', '#10b981'];

  return (
    <div className="absolute inset-0 z-0">
      <WavyBackground
        key={isDarkTheme ? 'dark-waves' : 'light-waves'}
        containerClassName="absolute inset-0 h-full overflow-hidden"
        colors={colors}
        waveWidth={48}
        backgroundFill={isDarkTheme ? '#000000' : '#ffffff'}
        blur={11}
        speed="slow"
        waveOpacity={isDarkTheme ? 0.34 : 0.26}
      />
    </div>
  );
};
