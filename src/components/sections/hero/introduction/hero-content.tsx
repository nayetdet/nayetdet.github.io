import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { BriefcaseBusiness } from 'lucide-react';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { About } from '@/types/portfolio/about/about';

export const HeroContent = (): ReactElement => {
  const { t } = useTranslation();
  const about: About = usePortfolio('about');

  return (
    <div className="relative flex max-w-280 flex-col items-center text-center">
      <p className="mb-7 inline-flex items-center gap-2 text-base font-medium tracking-[-0.02em] text-[#191919] sm:text-[1.0625rem] dark:text-white">
        <BriefcaseBusiness className="size-6" aria-hidden="true" />
        {about.identity.role}
      </p>
      <h1 className="relative z-10 text-[clamp(4rem,11vw,11rem)] leading-[0.88] font-medium tracking-[-0.075em] text-[#191919] dark:text-white">
        {t('hero.greeting')}
        <br />
        {about.identity.firstName}!
      </h1>
      <p className="mt-[clamp(1.5rem,2.5vw,2.25rem)] max-w-2xl text-[clamp(1.0625rem,1.2vw,1.25rem)]/[1.6] font-medium tracking-[-0.015em] text-[#404040] dark:text-gray-300">
        {about.introduction.tagline}
      </p>
    </div>
  );
};
