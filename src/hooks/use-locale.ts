import { useEffect } from 'react';
import { useLanguage, type UseLanguageReturn } from '@/hooks/use-language';
import i18n from '@/i18n';

export const useLocale = (): void => {
  const { language }: UseLanguageReturn = useLanguage();

  useEffect((): void => {
    document.documentElement.lang = language;
    document.title = `João Pedro Moreira — ${i18n.t('page.title', {
      lng: language,
    })}`;
    void i18n.changeLanguage(language);
  }, [language]);
};

export default useLocale;
