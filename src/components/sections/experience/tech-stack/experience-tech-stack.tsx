import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { usePortfolio } from '@/hooks/use-portfolio';
import { TechStackCard } from '@/components/sections/experience/tech-stack/card/tech-stack-card';
import type { TechStackCategory } from '@/types/portfolio/tech-stack/tech-stack-category';
import type { TechStack } from '@/types/portfolio/tech-stack/tech-stack';

export const ExperienceTechStack = (): ReactElement => {
  const { t } = useTranslation();
  const techStack: TechStack = usePortfolio('tech-stack');

  return (
    <div>
      <h3 className="text-3xl leading-none font-bold tracking-tight text-[#191919] sm:text-4xl dark:text-white">
        {t('techStack.title')}
      </h3>
      <p className="mt-8 mb-10 max-w-2xl text-base/7 text-[#404040] sm:mt-10 sm:text-lg/8 dark:text-gray-300">
        {t('techStack.description')}
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {techStack.categories.map((stack: TechStackCategory): ReactElement => (
          <TechStackCard key={stack.category} stack={stack} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTechStack;
