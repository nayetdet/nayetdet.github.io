import { useLanguage, type UseLanguageReturn } from '@/hooks/use-language';
import { portfolios } from '@/data/portfolios';
import type { Portfolio } from '@/types/portfolio';

export function usePortfolio(): Portfolio {
  const { language }: UseLanguageReturn = useLanguage();
  return portfolios[language];
}
