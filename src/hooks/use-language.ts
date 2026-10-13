import { useLanguageStore, type LanguageStore } from '@/stores/language-store';

export interface UseLanguageReturn {
  language: LanguageStore['language'];
  setLanguage: LanguageStore['setLanguage'];
}

export const useLanguage = (): UseLanguageReturn => {
  return useLanguageStore();
};

export default useLanguage;
