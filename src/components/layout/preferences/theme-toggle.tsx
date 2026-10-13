import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { Button } from '@/components/ui/button';
import { useTheme, type UseThemeReturn } from '@/hooks/use-theme';

export const ThemeToggle = (): ReactElement => {
  const { t } = useTranslation();
  const { isDarkTheme, toggleTheme }: UseThemeReturn = useTheme();
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={t('theme.toggle')}
      aria-pressed={isDarkTheme}
      className="relative block size-6 cursor-pointer rounded-none p-0 text-current transition-colors duration-300 hover:bg-transparent hover:text-current focus-visible:ring-0"
    >
      {isDarkTheme ? (
        <RiSunLine className="absolute inset-0 size-full" aria-hidden="true" />
      ) : (
        <RiMoonLine className="absolute inset-0 size-full" aria-hidden="true" />
      )}
    </Button>
  );
};

export default ThemeToggle;
