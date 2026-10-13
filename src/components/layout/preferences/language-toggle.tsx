import { useState, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, ChevronDown, Languages } from 'lucide-react';
import { BR, US } from 'country-flag-icons/react/3x2';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useLanguage, type UseLanguageReturn } from '@/hooks/use-language';

export const LanguageToggle = (): ReactElement => {
  const { t } = useTranslation();
  const { language, setLanguage }: UseLanguageReturn = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              aria-label={t('language.select')}
              className="group h-6 w-auto gap-0 rounded-none p-0 text-[#191919] hover:bg-transparent hover:text-[#191919] focus-visible:ring-0 dark:text-white dark:hover:text-white"
            >
              <Languages
                aria-hidden="true"
                className="size-6 transition-transform duration-300 ease-out group-hover:-rotate-6 group-aria-expanded:-rotate-6 motion-reduce:transition-none"
              />
              <ChevronDown
                aria-hidden="true"
                className="size-3 transition-transform duration-200 ease-out group-aria-expanded:rotate-180"
                strokeWidth={2.5}
              />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent
          className="hidden md:block"
          side="bottom"
          sideOffset={8}
        >
          {t('language.select')}
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent
        align="end"
        forceMount
        className="transition-[opacity,transform,visibility] duration-200 ease-out data-[state=closed]:pointer-events-none data-[state=closed]:invisible data-[state=closed]:-translate-y-1 data-[state=closed]:scale-95 data-[state=closed]:opacity-0 data-[state=open]:visible data-[state=open]:translate-y-0 data-[state=open]:scale-100 data-[state=open]:opacity-100 motion-reduce:transition-none"
      >
        <DropdownMenuItem onSelect={(): void => setLanguage('en-US')}>
          <US aria-hidden="true" className="mr-2 h-4 w-6 rounded-[2px]" />
          English
          {language === 'en-US' && (
            <Check aria-hidden="true" className="ml-auto size-4" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={(): void => setLanguage('pt-BR')}>
          <BR aria-hidden="true" className="mr-2 h-4 w-6 rounded-[2px]" />
          Português
          {language === 'pt-BR' && (
            <Check aria-hidden="true" className="ml-auto size-4" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
