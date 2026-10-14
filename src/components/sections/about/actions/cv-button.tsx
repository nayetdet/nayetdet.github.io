import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { About } from '@/types/portfolio/about/about';

export const CvButton = (): ReactElement => {
  const { t } = useTranslation();
  const about: About = usePortfolio('about');

  return (
    <a
      href={about.cv}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonVariants({
        className:
          'h-auto w-52 justify-between rounded-xl bg-[#191919] px-7 py-4 text-base font-semibold text-white transition-opacity duration-300 hover:bg-[#191919] hover:opacity-80 dark:bg-white dark:text-[#191919] dark:hover:bg-white',
      })}
    >
      {t('about.viewCv')}
      <FileText className="size-5" aria-hidden="true" />
    </a>
  );
};

export default CvButton;
