import type { ReactElement } from 'react';
import { LineWaves } from '@/components/ui/line-waves';
import { useTheme, type UseThemeReturn } from '@/hooks/use-theme';

export const ExperienceTrajectoryWaves = (): ReactElement => {
  const { isDarkTheme }: UseThemeReturn = useTheme();

  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] overflow-hidden rounded-[4rem] lg:block">
      <LineWaves
        key={isDarkTheme ? 'dark-trajectory-waves' : 'light-trajectory-waves'}
        className="size-full"
        color={isDarkTheme ? '#858585' : '#000000'}
        highlightColor={isDarkTheme ? '#aaaaaa' : '#000000'}
        lineCount={34}
        lineWidth={isDarkTheme ? 1.3 : 1.05}
        opacity={isDarkTheme ? 0.8 : 0.75}
        baseIntensity={isDarkTheme ? 0.82 : 0.34}
        speed={0}
      />
    </div>
  );
};

export default ExperienceTrajectoryWaves;
