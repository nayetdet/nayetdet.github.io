import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { ExperienceTrajectoryTimeline } from '@/components/sections/experience/trajectory/experience-trajectory-timeline';

export const ExperienceTrajectory = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className="mt-24">
      <h3 className="text-2xl font-bold text-[#191919] sm:text-3xl dark:text-white">
        {t('experience.trajectory')}
      </h3>
      <p className="mt-3 mb-8 max-w-2xl text-base/relaxed text-[#404040] dark:text-gray-300">
        {t('experience.trajectoryDescription')}
      </p>
      <div className="grid w-full md:grid-cols-2 md:gap-12">
        <div className="hidden md:block" aria-hidden="true" />
        <ExperienceTrajectoryTimeline />
      </div>
    </div>
  );
};

export default ExperienceTrajectory;
