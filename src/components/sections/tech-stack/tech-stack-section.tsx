import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/common/section-title';
import { sections } from '@/constants/sections';
import { usePortfolio } from '@/hooks/use-portfolio';
import { TechStackCard } from '@/components/sections/tech-stack/card/tech-stack-card';
import type { Portfolio } from '@/types/portfolio';
import type { TechStack } from '@/types/tech-stack';

export const TechStackSection = (): ReactElement => {
  const { t } = useTranslation();
  const portfolio: Portfolio = usePortfolio();

  return (
    <section
      id={sections.techStack.id}
      className="bg-gray-50 pt-32 pb-24 dark:bg-[#121212]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <SectionTitle>{t('techStack.title')}</SectionTitle>
        <p className="-mt-8 mb-12 max-w-2xl text-base/relaxed text-[#404040] sm:text-lg dark:text-gray-300">
          {t('techStack.description')}
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {portfolio.techStack.map((stack: TechStack): ReactElement => (
            <TechStackCard key={stack.category} stack={stack} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
