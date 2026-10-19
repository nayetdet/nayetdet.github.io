import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { sections } from '@/constants/sections';
import { scrollTo } from '@/utils/scroll';

export const Logo = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={(): void => scrollTo(sections.home.id)}
      aria-label={`${t('brand.goHome')}: João Pedro`}
      className="shrink-0 cursor-pointer border-0 bg-transparent p-0 text-lg leading-none font-bold tracking-tight text-[#191919] transition-opacity hover:opacity-70 dark:text-white"
    >
      João Pedro
    </button>
  );
};

export default Logo;
