import { useCallback, useEffect, useState, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '@/components/common/logo';
import { NavbarItems } from '@/components/layout/navbar/navbar-items';
import { LanguageToggle } from '@/components/layout/preferences/language-toggle';
import { ThemeToggle } from '@/components/layout/preferences/theme-toggle';
import { NavbarMenu } from '@/components/layout/navbar/navbar-menu';
import { NavbarMenuToggle } from '@/components/layout/navbar/navbar-menu-toggle';
import { Sheet } from '@/components/ui/sheet';
import {
  navigationSections,
  type Section,
  type SectionId,
} from '@/constants/sections';
import { useActiveSection } from '@/hooks/use-active-section';
import { useMobile } from '@/hooks/use-mobile';
import { scrollTo } from '@/utils/scroll';

export const Navbar = (): ReactElement => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const activeSectionId: SectionId = useActiveSection(navigationSections);
  const isMobile: boolean = useMobile();

  useEffect((): (() => void) | undefined => {
    if (isMobile) {
      return undefined;
    }

    const frameId: number = requestAnimationFrame(() => setIsMenuOpen(false));

    return (): void => cancelAnimationFrame(frameId);
  }, [isMobile]);

  const navigateTo = useCallback((sectionId: Section['id']): void => {
    scrollTo(sectionId);
    setIsMenuOpen(false);
  }, []);

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <nav
        className="fixed top-4 left-1/2 z-50 w-[calc(100%-3rem)] -translate-x-1/2 transform md:w-max"
        aria-label={t('navigation.title')}
      >
        <div className="h-14 rounded-full border border-[#191919]/20! bg-white/20 px-8 shadow-lg backdrop-blur-sm sm:px-12 dark:border-white/25! dark:bg-black/20">
          <div className="flex h-full items-center justify-center">
            <div className="hidden items-center gap-6 md:flex">
              <NavbarItems
                items={navigationSections}
                activeSectionId={activeSectionId}
                onNavigate={navigateTo}
                variant="desktop"
              />
              <span
                className="h-4 w-px shrink-0 self-center bg-gray-400/80 dark:bg-gray-500"
                aria-hidden="true"
              />
              <div className="flex items-center gap-6">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
            <div className="flex w-full items-center justify-between md:hidden">
              <Logo />
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
                <NavbarMenuToggle
                  isOpen={isMenuOpen}
                  onClick={(): void => setIsMenuOpen(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <NavbarMenu
        items={navigationSections}
        activeSectionId={activeSectionId}
        onNavigate={navigateTo}
        onClose={(): void => setIsMenuOpen(false)}
      />
    </Sheet>
  );
};

export default Navbar;
