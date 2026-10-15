import type { ReactElement } from 'react';
import { LineWaves } from '@/components/ui/line-waves';
import { useTheme, type UseThemeReturn } from '@/hooks/use-theme';

export const ExperienceTrajectoryWaves = (): ReactElement => {
  const { isDarkTheme }: UseThemeReturn = useTheme();
  const color: string = isDarkTheme ? '#ffffff' : '#000000';

  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden rounded-[2.5rem] lg:block">
      <LineWaves
        key={isDarkTheme ? 'dark-trajectory-waves' : 'light-trajectory-waves'}
        className={
          isDarkTheme ? 'size-full opacity-60' : 'size-full opacity-50'
        }
        color={color}
        highlightColor={color}
        lineCount={28}
        lineWidth={1}
        opacity={0.68}
        baseIntensity={0.42}
        speed={0}
      />
    </div>
  );
};

export default ExperienceTrajectoryWaves;
