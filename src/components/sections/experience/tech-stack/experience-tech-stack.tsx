import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { usePortfolio } from '@/hooks/use-portfolio';
import { TechStackCard } from '@/components/sections/experience/tech-stack/card/tech-stack-card';
import type { TechStackCategory } from '@/types/portfolio/tech-stack/tech-stack-category';
import type { TechStack } from '@/types/portfolio/tech-stack/tech-stack';
import { sections } from '@/constants/sections';

export const ExperienceTechStack = (): ReactElement => {
  const { t } = useTranslation();
  const techStack: TechStack = usePortfolio('tech-stack');

  return (
    <div
      id={sections.experience.subsections.techStack.id}
      className="scroll-mt-24"
    >
      <h3 className="text-[clamp(2.5rem,4.5vw,5rem)] leading-[0.96] font-semibold tracking-[-0.055em] text-[#191919] dark:text-white">
        {t('techStack.title')}
      </h3>
      <p className="mt-[clamp(1.5rem,3vw,2.5rem)] mb-[clamp(2.5rem,4vw,4rem)] max-w-2xl text-[clamp(1.125rem,1.4vw,1.375rem)]/[1.6] font-normal tracking-[-0.02em] text-[#404040] dark:text-gray-300">
        {t('techStack.description')}
      </p>
      <div className="grid gap-[clamp(1.25rem,2vw,2rem)] md:grid-cols-2">
        {techStack.categories.map((stack: TechStackCategory): ReactElement => (
          <TechStackCard key={stack.category} stack={stack} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTechStack;
