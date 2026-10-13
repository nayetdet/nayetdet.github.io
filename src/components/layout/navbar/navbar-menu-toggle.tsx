import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

interface NavbarMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const NavbarMenuToggle = ({
  isOpen,
  onToggle,
}: NavbarMenuToggleProps): ReactElement => {
  const { t } = useTranslation();
  const label: string = t(
    isOpen ? 'navigation.closeMenu' : 'navigation.openMenu',
  );

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className="relative flex size-9 items-center justify-center rounded-md p-2 text-gray-700 transition-all hover:text-gray-900 focus:outline-none dark:text-gray-200 dark:hover:text-white"
      aria-label={label}
      aria-expanded={isOpen}
    >
      <span className="sr-only">{label}</span>
      <span className="flex h-5 w-6 flex-col justify-between">
        <span
          className={`block h-0.5 w-full transform bg-current transition-all duration-300 ${isOpen ? 'translate-y-2.25 rotate-45' : ''}`}
        />
        <span
          className={`block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'translate-x-6 opacity-0' : ''}`}
        />
        <span
          className={`block h-0.5 w-full transform bg-current transition-all duration-300 ${isOpen ? '-translate-y-2.25 -rotate-45' : ''}`}
        />
      </span>
    </Button>
  );
};
