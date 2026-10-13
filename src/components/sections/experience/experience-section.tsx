import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { usePortfolio } from '@/hooks/use-portfolio';
import { SectionTitle } from '@/components/common/section-title';
import { sections } from '@/constants/sections';
import { ExperienceTechStack } from '@/components/sections/experience/tech-stack/experience-tech-stack';
import { ExperienceTrajectory } from '@/components/sections/experience/trajectory/experience-trajectory';
import { ExperienceHighlights } from '@/components/sections/experience/experience-highlights';
import type { Portfolio } from '@/types/portfolio';

export const ExperienceSection = (): ReactElement | null => {
  const { t } = useTranslation();
  const { techStack, trajectory, experienceImage, name }: Portfolio =
    usePortfolio();

  if (techStack.length === 0 && trajectory.length === 0) {
    return null;
  }

  return (
    <section
      id={sections.experience.id}
      className="bg-gray-50 pt-32 pb-24 dark:bg-[#121212]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <SectionTitle>{t('experience.title')}</SectionTitle>
        <div className="-mt-8 mb-16 flex flex-col gap-8 md:flex-row md:items-stretch md:gap-12">
          <div className="flex w-full flex-col gap-6 md:flex-1">
            <p className="w-full max-w-2xl text-left text-base/relaxed text-[#404040] sm:text-lg dark:text-gray-300">
              {t('experience.description')}
            </p>
            <ExperienceHighlights />
          </div>
          {experienceImage && (
            <div className="group relative h-80 w-full shrink-0 overflow-hidden rounded-3xl sm:h-88 sm:w-72 md:h-auto lg:w-96 xl:w-xl">
              <img
                alt={`${name.first} ${name.last}`}
                className="absolute inset-0 size-full -scale-x-100 rounded-3xl object-cover"
                src={experienceImage}
              />
            </div>
          )}
        </div>
        {techStack.length > 0 && <ExperienceTechStack />}
        {trajectory.length > 0 && <ExperienceTrajectory />}
      </div>
    </section>
  );
};

export default ExperienceSection;
