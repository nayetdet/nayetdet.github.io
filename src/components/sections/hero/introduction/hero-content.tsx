import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { BriefcaseBusiness } from 'lucide-react';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { Portfolio } from '@/types/portfolio';

export const HeroContent = (): ReactElement => {
  const { t } = useTranslation();
  const portfolio: Portfolio = usePortfolio();

  return (
    <div className="relative flex max-w-5xl flex-col items-center text-center">
      <p className="mb-6 inline-flex items-center gap-2 text-lg font-medium text-[#191919] sm:text-xl dark:text-white">
        <BriefcaseBusiness className="size-6" aria-hidden="true" />
        {portfolio.role}
      </p>
      <h1 className="relative z-10 text-5xl font-bold tracking-[-0.06em] text-[#191919] sm:text-6xl md:text-8xl lg:text-9xl dark:text-white">
        {t('hero.greeting')}
        <br />
        {portfolio.name.first}!
      </h1>
      <p className="mt-6 max-w-xl text-base/relaxed text-[#404040] sm:text-lg dark:text-gray-300">
        {portfolio.tagline}
      </p>
    </div>
  );
};
