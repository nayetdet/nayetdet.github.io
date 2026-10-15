import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { ExperienceTrajectoryTimeline } from '@/components/sections/experience/trajectory/experience-trajectory-timeline';

export const ExperienceTrajectory = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className="mt-[clamp(5.5rem,10vw,8rem)] lg:w-1/2">
      <h3 className="text-[clamp(2.5rem,4.5vw,5rem)] leading-[0.96] font-semibold tracking-[-0.055em] text-[#191919] dark:text-white">
        {t('experience.trajectory')}
      </h3>
      <p className="mt-[clamp(1.5rem,3vw,2.5rem)] mb-[clamp(2.5rem,4vw,4rem)] max-w-2xl text-[clamp(1.125rem,1.4vw,1.375rem)]/[1.6] font-normal tracking-[-0.02em] text-[#404040] dark:text-gray-300">
        {t('experience.trajectoryDescription')}
      </p>
      <div className="w-full max-w-3xl">
        <ExperienceTrajectoryTimeline />
      </div>
    </div>
  );
};

export default ExperienceTrajectory;
