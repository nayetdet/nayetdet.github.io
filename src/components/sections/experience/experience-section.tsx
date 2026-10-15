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
import { Image } from '@/components/common/image';

export const ExperienceSection = (): ReactElement => {
  const { t } = useTranslation();
  const about: About = usePortfolio('about');
  const trajectory: Trajectory = usePortfolio('trajectory');

  return (
    <div
      id={sections.experience.id}
      className="scroll-mt-24 bg-gray-50 py-[clamp(6rem,12vh,10rem)] dark:bg-[#121212]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <SectionTitle>{t('experience.title')}</SectionTitle>
        <div className="mb-[clamp(5rem,10vw,8rem)] flex flex-col gap-[clamp(2.5rem,5vw,5rem)] md:flex-row md:items-stretch">
          <div className="flex w-full flex-col gap-[clamp(2.5rem,4vw,4rem)] md:flex-1">
            <p className="w-full max-w-2xl text-left text-[clamp(1.0625rem,1.2vw,1.25rem)]/[1.65] font-medium tracking-[-0.015em] text-[#404040] dark:text-gray-300">
              {t('experience.description')}
            </p>
            <ExperienceHighlights />
          </div>
          <div className="group relative h-80 w-full shrink-0 overflow-hidden rounded-3xl shadow-[0_12px_30px_rgb(25_25_25/0.1)] ring-1 ring-[#191919]/15 sm:h-88 sm:w-72 md:h-auto lg:w-96 xl:w-xl dark:shadow-none dark:ring-white/10">
            <Image
              alt={`${about.identity.firstName} ${about.identity.lastName}`}
              buttonClassName="absolute inset-0 size-full cursor-zoom-in"
              className="size-full rounded-3xl object-cover object-left transition-transform duration-300 group-hover/image:scale-105 motion-reduce:transition-none"
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
