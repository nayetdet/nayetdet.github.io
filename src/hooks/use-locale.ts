import { useLayoutEffect } from 'react';
import { useLanguage, type UseLanguageReturn } from '@/hooks/use-language';
import i18n from '@/i18n';

export function useLocale(): void {
  const { language }: UseLanguageReturn = useLanguage();

  useLayoutEffect((): void => {
    document.documentElement.lang = language;
    void i18n.changeLanguage(language).then((): void => {
      document.title = `João Pedro Moreira — ${i18n.t('page.title')}`;
    });
  }, [language]);
}
