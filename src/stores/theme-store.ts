import { z } from 'zod';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type Theme = 'light' | 'dark';

const themeSchema: z.ZodType<Theme> = z.enum(['light', 'dark']);

export interface ThemeStore {
  theme: Theme;
  isDarkTheme: boolean;
  isLightTheme: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    immer((set): ThemeStore => {
      const applyTheme = (theme: Theme): void => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
      };

      return {
        theme: 'dark',
        isDarkTheme: true,
        isLightTheme: false,
        setTheme: (theme: Theme): void => {
          applyTheme(theme);
          set((state: ThemeStore): void => {
            state.theme = theme;
            state.isDarkTheme = theme === 'dark';
            state.isLightTheme = theme === 'light';
          });
        },
        toggleTheme: (): void => {
          set((state: ThemeStore): void => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
            state.isDarkTheme = state.theme === 'dark';
            state.isLightTheme = state.theme === 'light';
            applyTheme(state.theme);
          });
        },
      };
    }),
    {
      name: 'portfolio-theme',
      storage: createJSONStorage((): Storage => localStorage),
      partialize: (state: ThemeStore): Pick<ThemeStore, 'theme'> => ({
        theme: state.theme,
      }),
      onRehydrateStorage:
        (): ((state: ThemeStore | undefined, error?: unknown) => void) =>
        (state: ThemeStore | undefined, error?: unknown): void => {
          const storedTheme: ReturnType<typeof themeSchema.safeParse> =
            themeSchema.safeParse(state?.theme);
          if (error || !storedTheme.success) {
            state?.setTheme('dark');
            return;
          }

          state?.setTheme(storedTheme.data);
        },
    },
  ),
);

export default useThemeStore;
