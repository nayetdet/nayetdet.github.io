import { useThemeStore, type ThemeStore } from '@/stores/theme-store';

export interface UseThemeReturn {
  theme: ThemeStore['theme'];
  isDarkTheme: boolean;
  isLightTheme: boolean;
  setTheme: ThemeStore['setTheme'];
  toggleTheme: ThemeStore['toggleTheme'];
}

export function useTheme(): UseThemeReturn {
  return useThemeStore();
}
