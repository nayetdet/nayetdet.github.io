import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';
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
      className="inline-flex h-auto w-52 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-transparent bg-[#191919] px-7 py-4 text-base/6 font-semibold whitespace-nowrap text-white transition-opacity duration-300 outline-none hover:bg-[#191919] hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[#191919]/50 focus-visible:outline-none dark:bg-white dark:text-[#191919] dark:hover:bg-white dark:focus-visible:ring-white/50"
    >
      {t('about.viewCv')}
      <FileText className="size-5" aria-hidden="true" />
    </a>
  );
};

export default CvButton;
