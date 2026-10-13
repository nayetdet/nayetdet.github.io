import { memo, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '@/components/common/logo';
import { NavbarItems } from '@/components/layout/navbar/navbar-items';
import { LanguageToggle } from '@/components/layout/preferences/language-toggle';
import { ThemeToggle } from '@/components/layout/preferences/theme-toggle';
import { NavbarMenuToggle } from '@/components/layout/navbar/navbar-menu-toggle';
import type { Section } from '@/constants/sections';
import { SheetContent, SheetTitle } from '@/components/ui/sheet';

interface NavbarMenuProps {
  items: readonly Section[];
  activeSectionId: Section['id'];
  onNavigate: (sectionId: Section['id']) => void;
  onClose: () => void;
}

export const NavbarMenu = memo(
  ({
    items,
    activeSectionId,
    onNavigate,
    onClose,
  }: NavbarMenuProps): ReactElement => {
    const { t } = useTranslation();

    return (
      <SheetContent
        side="top"
        showCloseButton={false}
        className="inset-0 z-60 h-dvh w-full gap-0 border-0 bg-gray-50 p-0 shadow-none transition-[opacity,transform,visibility] transition-discrete duration-250 ease-out data-[state=closed]:invisible data-[state=closed]:-translate-y-3 data-[state=closed]:opacity-0 md:hidden dark:bg-[#101010]"
      >
        <div className="absolute inset-0">
          <SheetTitle className="sr-only">
            {t('navigation.mobileMenu')}
          </SheetTitle>
          <div className="absolute top-4 left-1/2 flex h-14 w-[calc(100%-3rem)] -translate-x-1/2 transform items-center justify-between rounded-full border border-[#191919]/20! bg-white/20 px-8 shadow-lg backdrop-blur-sm sm:px-12 dark:border-white/25! dark:bg-black/20">
            <Logo />
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <NavbarMenuToggle isOpen onClick={onClose} />
            </div>
          </div>
          <nav
            className="flex h-full flex-col items-center justify-center"
            aria-label={t('navigation.mobileMenu')}
          >
            <NavbarItems
              items={items}
              activeSectionId={activeSectionId}
              onNavigate={onNavigate}
              variant="mobile"
            />
          </nav>
        </div>
      </SheetContent>
    );
  },
);
