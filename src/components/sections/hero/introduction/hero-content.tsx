import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { BriefcaseBusiness } from 'lucide-react';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { About } from '@/types/portfolio/about/about';

export const HeroContent = (): ReactElement => {
  const { t } = useTranslation();
  const about: About = usePortfolio('about');

  return (
    <div className="relative flex max-w-328 flex-col items-center text-center">
      <p className="mb-[clamp(1.5rem,2.5vw,2.25rem)] inline-flex items-center gap-2.5 text-base font-medium tracking-[-0.015em] text-[#404040] [text-shadow:0_1px_12px_rgb(255_255_255/0.9)] dark:text-gray-100 dark:[text-shadow:0_2px_16px_rgb(0_0_0/0.95)]">
        <BriefcaseBusiness className="size-5.5" aria-hidden="true" />
        {about.identity.role}
      </p>
      <h1 className="relative z-10 text-[#191919] [text-shadow:0_1px_14px_rgb(255_255_255/0.9)] dark:text-white dark:[text-shadow:0_2px_18px_rgb(0_0_0/0.95)]">
        <span className="block text-[clamp(2.25rem,4.5vw,5rem)] leading-[0.95] font-semibold tracking-[-0.06em]">
          {t('hero.greeting')}
        </span>
        <span className="mt-[clamp(0.25rem,0.6vw,0.75rem)] block text-[clamp(5rem,11.5vw,12rem)] leading-[0.84] font-semibold tracking-[-0.085em]">
          {about.identity.firstName}!
        </span>
      </h1>
      <p className="mt-[clamp(2rem,3vw,3rem)] max-w-172 text-[clamp(1.125rem,1.4vw,1.375rem)]/[1.6] font-normal tracking-[-0.02em] text-[#404040] [text-shadow:0_1px_12px_rgb(255_255_255/0.9)] dark:text-gray-100 dark:[text-shadow:0_2px_16px_rgb(0_0_0/0.95)]">
        {about.introduction.tagline}
      </p>
    </div>
  );
};
