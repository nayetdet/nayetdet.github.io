import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useTheme, type UseThemeReturn } from '@/hooks/use-theme';

export const ThemeToggle = (): ReactElement => {
  const { t } = useTranslation();
  const { isDarkTheme, toggleTheme }: UseThemeReturn = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label={t('theme.toggle')}
          aria-pressed={isDarkTheme}
          className="group relative flex size-6 cursor-pointer items-center justify-center rounded-none p-0 text-[#191919] transition-colors duration-300 hover:bg-transparent hover:text-[#191919] focus-visible:ring-0 dark:text-white dark:hover:text-white"
        >
          <span
            className="transition-transform duration-300 ease-out group-hover:-rotate-12 group-active:-rotate-12 motion-reduce:transition-none"
            aria-hidden="true"
          >
            {isDarkTheme ? (
              <Sun className="size-6" />
            ) : (
              <Moon className="size-6" />
            )}
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent className="hidden md:block" side="bottom" sideOffset={8}>
        {t('theme.toggle')}
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeToggle;
