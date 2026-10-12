import type { ReactElement } from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { Button } from '@/components/ui/button';
import { useTheme, type UseThemeReturn } from '@/hooks/use-theme';

export const ThemeToggle = (): ReactElement => {
  const { isDarkTheme, toggleTheme }: UseThemeReturn = useTheme();
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle between light and dark theme"
      aria-pressed={isDarkTheme}
      className="relative block size-6 cursor-pointer rounded-none p-0 text-current transition-transform duration-300 hover:rotate-[-15deg] hover:bg-transparent hover:text-current focus-visible:ring-0"
    >
      {isDarkTheme ? (
        <RiSunFill
          className="absolute inset-0 size-full transition-transform duration-400 ease-out"
          aria-hidden="true"
        />
      ) : (
        <RiMoonFill
          className="absolute inset-0 size-full transition-transform duration-400 ease-out"
          aria-hidden="true"
        />
      )}
    </Button>
  );
};

export default ThemeToggle;
