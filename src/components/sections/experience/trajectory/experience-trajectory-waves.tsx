import type { ReactElement } from 'react';
import { LineWaves } from '@/components/ui/line-waves';

export const ExperienceTrajectoryWaves = (): ReactElement => (
  <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden rounded-[2.5rem] lg:block">
    <LineWaves
      className="size-full opacity-60"
      color="#ffffff"
      highlightColor="#ffffff"
      lineCount={28}
      lineWidth={1}
      opacity={0.68}
      baseIntensity={0.42}
      speed={0}
    />
  </div>
);

export default ExperienceTrajectoryWaves;
