import { useCallback, useState, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '@/components/layout/preferences/language-toggle';
import { ThemeToggle } from '@/components/layout/preferences/theme-toggle';
import { NavbarMenuToggle } from '@/components/layout/navbar/navbar-menu-toggle';
import { NavigationMobileMenu } from '@/components/layout/navbar/navigation/navigation-mobile-menu';
import { NavigationItems } from '@/components/layout/navbar/navigation/navigation-items';
import {
  navigationSections,
  type Section,
  type SectionId,
} from '@/constants/sections';
import { useActiveSection } from '@/hooks/use-active-section';
import { useScrollLock } from '@/hooks/use-scroll-lock';
import { useScrollTo, type UseScrollToReturn } from '@/hooks/use-scroll-to';

export const NavbarMain = (): ReactElement => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const activeSectionId: SectionId = useActiveSection(navigationSections);

  useScrollLock(isMenuOpen);
  const { scrollTo }: UseScrollToReturn = useScrollTo();
  const navigateTo = useCallback(
    (sectionId: Section['id']): void => {
      scrollTo(sectionId);
      setIsMenuOpen(false);
    },
    [scrollTo],
  );

  return (
    <>
      <nav
        className="fixed top-4 left-1/2 z-50 w-[calc(100%-3rem)] -translate-x-1/2 transform md:w-max"
        aria-label={t('navigation.title')}
      >
        <div className="rounded-full border border-[#191919]/20! bg-white/20 px-8 shadow-lg backdrop-blur-sm sm:px-12 dark:border-white/25! dark:bg-black/20">
          <div className="flex h-14 items-center justify-center">
            <div className="hidden md:flex md:items-center">
              <NavigationItems
                items={navigationSections}
                activeSectionId={activeSectionId}
                onNavigate={navigateTo}
                variant="desktop"
              />
              <span
                className="mr-4 ml-1 self-center text-lg leading-none font-light text-gray-400/80 dark:text-gray-500"
                aria-hidden="true"
              >
                |
              </span>
              <div className="flex items-center">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2 md:hidden">
              <LanguageToggle />
              <ThemeToggle />
              <NavbarMenuToggle
                isOpen={isMenuOpen}
                onToggle={(): void =>
                  setIsMenuOpen((isOpen: boolean): boolean => !isOpen)
                }
              />
            </div>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <NavigationMobileMenu
          items={navigationSections}
          activeSectionId={activeSectionId}
          onNavigate={navigateTo}
        />
      )}
    </>
  );
};

export default NavbarMain;
