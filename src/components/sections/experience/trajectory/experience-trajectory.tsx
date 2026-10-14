import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { ExperienceTrajectoryTimeline } from '@/components/sections/experience/trajectory/experience-trajectory-timeline';
import { ExperienceTrajectoryGallery } from '@/components/sections/experience/trajectory/experience-trajectory-gallery';

export const ExperienceTrajectory = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className="mt-16 sm:mt-20">
      <h3 className="text-3xl leading-none font-bold tracking-tight text-[#191919] sm:text-4xl dark:text-white">
        {t('experience.trajectory')}
      </h3>
      <p className="mt-8 mb-10 max-w-2xl text-base/7 text-[#404040] sm:mt-10 sm:text-lg/8 dark:text-gray-300">
        {t('experience.trajectoryDescription')}
      </p>
      <div className="grid w-full md:grid-cols-2 md:gap-12">
        <ExperienceTrajectoryTimeline />
        <ExperienceTrajectoryGallery />
      </div>
    </div>
  );
};

export default ExperienceTrajectory;
