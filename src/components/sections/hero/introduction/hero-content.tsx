import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

export const HeroContent = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className="relative flex max-w-328 flex-col items-center text-center">
      <p className="mb-[clamp(1.75rem,2.5vw,2.5rem)] text-[clamp(1rem,1.05vw,1.125rem)]/[1.5] font-medium tracking-[-0.01em] text-[#5f5f5f] [text-shadow:0_1px_12px_rgb(255_255_255/0.95)] dark:text-gray-300 dark:[text-shadow:0_2px_16px_rgb(0_0_0/0.95)]">
        {t('hero.role')}
      </p>
      <h1 className="relative z-10 text-[#191919] [text-shadow:0_1px_14px_rgb(255_255_255/0.9)] dark:text-white dark:[text-shadow:0_2px_18px_rgb(0_0_0/0.95)]">
        <span className="block text-[clamp(2.75rem,5.2vw,5.75rem)] leading-[0.92] font-semibold tracking-[-0.065em]">
          {t('hero.greeting')}{' '}
        </span>
        <span className="mt-[clamp(0.375rem,0.7vw,0.875rem)] block text-[clamp(5.25rem,12vw,13rem)] leading-[0.82] font-semibold tracking-[-0.09em]">
          João Pedro!
        </span>
      </h1>
      <p className="mt-[clamp(2.25rem,3.5vw,3.5rem)] max-w-176 text-[clamp(1.125rem,1.35vw,1.375rem)]/[1.65] font-normal tracking-[-0.02em] text-[#404040] [text-shadow:0_1px_12px_rgb(255_255_255/0.95)] dark:text-gray-200 dark:[text-shadow:0_2px_16px_rgb(0_0_0/0.95)]">
        {t('hero.tagline')}
      </p>
    </div>
  );
};
