import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { RiExternalLinkLine } from 'react-icons/ri';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { Portfolio } from '@/types/portfolio';

export const CvButton = (): ReactElement => {
  const { t } = useTranslation();
  const portfolio: Portfolio = usePortfolio();

  return (
    <div className="flex justify-center lg:justify-start">
      <a
        href={portfolio.cv}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-[#191919] px-6 py-3 text-base font-semibold text-white transition-opacity duration-300 hover:opacity-80 dark:bg-white dark:text-[#191919]"
      >
        {t('about.viewCv')}
        <RiExternalLinkLine className="size-6" aria-hidden="true" />
      </a>
    </div>
  );
};
