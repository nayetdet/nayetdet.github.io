import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { About } from '@/types/portfolio/about/about';
import type { Trajectory } from '@/types/portfolio/trajectory/trajectory';
import { SectionTitle } from '@/components/common/section-title';
import { ExperienceTechStack } from '@/components/sections/experience/tech-stack/experience-tech-stack';
import { ExperienceTrajectory } from '@/components/sections/experience/trajectory/experience-trajectory';
import { ExperienceHighlights } from '@/components/sections/experience/experience-highlights';
import { sections } from '@/constants/sections';

export const ExperienceSection = (): ReactElement => {
  const { t } = useTranslation();
  const about: About = usePortfolio('about');
  const trajectory: Trajectory = usePortfolio('trajectory');

  return (
    <div
      id={sections.experience.id}
      className="scroll-mt-24 bg-gray-50 py-12 sm:py-16 dark:bg-[#121212]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <SectionTitle>{t('experience.title')}</SectionTitle>
        <div className="mb-16 flex flex-col gap-10 sm:mb-20 md:flex-row md:items-stretch lg:gap-14">
          <div className="flex w-full flex-col gap-6 md:flex-1">
            <p className="w-full max-w-2xl text-left text-base/7 text-[#404040] sm:text-lg/8 dark:text-gray-300">
              {t('experience.description')}
            </p>
            <ExperienceHighlights />
          </div>
          <div className="group relative h-80 w-full shrink-0 overflow-hidden rounded-3xl sm:h-88 sm:w-72 md:h-auto lg:w-96 xl:w-xl">
            <img
              alt={`${about.identity.firstName} ${about.identity.lastName}`}
              className="absolute inset-0 size-full -scale-x-100 rounded-3xl object-cover object-right"
              decoding="async"
              loading="lazy"
              src={trajectory.image}
            />
          </div>
        </div>
        <ExperienceTechStack />
        <ExperienceTrajectory />
      </div>
    </div>
  );
};

export default ExperienceSection;
