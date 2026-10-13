import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

export const Logo = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <a
      href="#home"
      aria-label={t('brand.goHome')}
      className="shrink-0 text-lg leading-none font-bold tracking-tight text-[#191919] transition-opacity hover:opacity-70 dark:text-white"
    >
      João Pedro
    </a>
  );
};

export default Logo;
