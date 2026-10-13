import type { Language } from '@/stores/language-store';
import type { Portfolio } from '@/types/portfolio';
import portfolioEnUS from '@/data/portfolio.en-US';
import portfolioPtBR from '@/data/portfolio.pt-BR';

export const portfolios: Record<Language, Portfolio> = {
  'en-US': portfolioEnUS,
  'pt-BR': portfolioPtBR,
};
