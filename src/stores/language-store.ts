import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'pt-BR' | 'en-US';

export interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => {
      const detectedLanguage: string | undefined =
        typeof navigator !== 'undefined'
          ? [...navigator.languages, navigator.language].find(
              (language: string): boolean => /^(pt|en)/i.test(language),
            )
          : undefined;

      return {
        language: detectedLanguage?.toLowerCase().startsWith('pt')
          ? 'pt-BR'
          : 'en-US',
        setLanguage: (language: Language): void => {
          set({ language });
        },
      };
    },
    { name: 'portfolio-language' },
  ),
);
