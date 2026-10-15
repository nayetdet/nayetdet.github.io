import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { ExperienceTrajectoryTimeline } from '@/components/sections/experience/trajectory/experience-trajectory-timeline';
import { ExperienceTrajectoryGallery } from '@/components/sections/experience/trajectory/experience-trajectory-gallery';

export const ExperienceTrajectory = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className="mt-[clamp(5rem,10vw,8rem)]">
      <h3 className="text-[clamp(2.5rem,4.5vw,5rem)] leading-[0.96] font-medium tracking-[-0.055em] text-[#191919] dark:text-white">
        {t('experience.trajectory')}
      </h3>
      <p className="mt-[clamp(2rem,3vw,3rem)] mb-[clamp(2.5rem,4vw,4rem)] max-w-2xl text-[clamp(1.0625rem,1.2vw,1.25rem)]/[1.6] font-medium tracking-[-0.015em] text-[#404040] dark:text-gray-300">
        {t('experience.trajectoryDescription')}
      </p>
      <div className="grid w-full gap-[clamp(2.5rem,5vw,4rem)] md:grid-cols-2 md:gap-[clamp(2rem,4vw,4rem)]">
        <ExperienceTrajectoryTimeline />
        <ExperienceTrajectoryGallery />
      </div>
    </div>
  );
};

export default ExperienceTrajectory;
