import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/use-language';

export const LanguageToggle = (): ReactElement => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === 'pt-BR' ? 'en-US' : 'pt-BR';

  return (
    <button
      type="button"
      onClick={(): void => setLanguage(nextLanguage)}
      aria-label={`${t('language.label')}: ${t(nextLanguage === 'pt-BR' ? 'language.portuguese' : 'language.english')}`}
      title={t('language.label')}
      className="mr-4 cursor-pointer text-sm font-semibold text-current transition-opacity hover:opacity-60"
    >
      {language === 'pt-BR' ? 'PT' : 'EN'}
    </button>
  );
};
