import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { usePortfolio } from '@/hooks/use-portfolio';
import { TechStackCard } from '@/components/sections/experience/tech-stack/card/tech-stack-card';
import type { Portfolio } from '@/types/portfolio';
import type { TechStack } from '@/types/tech-stack';

export const ExperienceTechStack = (): ReactElement => {
  const { t } = useTranslation();
  const portfolio: Portfolio = usePortfolio();

  return (
    <div>
      <h3 className="text-3xl leading-none font-bold tracking-tight text-[#191919] sm:text-4xl dark:text-white">
        {t('techStack.title')}
      </h3>
      <p className="mt-4 mb-10 max-w-2xl text-base/7 text-[#404040] sm:text-lg/8 dark:text-gray-300">
        {t('techStack.description')}
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {portfolio.techStack.map((stack: TechStack): ReactElement => (
          <TechStackCard key={stack.category} stack={stack} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTechStack;
