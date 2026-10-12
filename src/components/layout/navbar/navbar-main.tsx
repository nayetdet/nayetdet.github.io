import { useState, type ReactElement } from 'react';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { NavbarMenuToggle } from '@/components/layout/navbar/navbar-menu-toggle';
import { NavigationMobileMenu } from '@/components/layout/navbar/navigation/navigation-mobile-menu';
import { NavigationItems } from '@/components/layout/navbar/navigation/navigation-items';
import { sections, type Section } from '@/constants/sections';
import { portfolio } from '@/data/portfolio';
import { useScrollLock } from '@/hooks/use-scroll-lock';
import { useScrollTo, type UseScrollToReturn } from '@/hooks/use-scroll-to';

const links: readonly Section[] = Object.values(sections).filter(
  (section: Section): boolean =>
    portfolio.projects.length > 0 || section.id !== sections.projects.id,
);

export const NavbarMain = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const { scrollTo }: UseScrollToReturn = useScrollTo();
  useScrollLock(open);

  const navigateTo = (sectionId: Section['id']): void => {
    scrollTo(sectionId);
    setOpen(false);
  };

  const toggleMenu = (): void => setOpen((isOpen: boolean): boolean => !isOpen);

  return (
    <>
      <nav
        className="fixed top-4 left-1/2 z-50 w-[calc(100%-3rem)] -translate-x-1/2 transform md:w-auto"
        aria-label="Main navigation"
      >
        <div className="rounded-full border border-[#191919]/20! bg-white/20 px-8 shadow-lg backdrop-blur-sm sm:px-12 dark:border-white/25! dark:bg-black/20">
          <div className="flex h-14 items-center justify-between">
            <div className="hidden md:flex md:items-center">
              <NavigationItems
                items={links}
                onNavigate={navigateTo}
                variant="desktop"
              />
              <div className="ml-8 flex items-center">
                <ThemeToggle />
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <NavbarMenuToggle isOpen={open} onToggle={toggleMenu} />
            </div>
          </div>
        </div>
      </nav>
      {open && <NavigationMobileMenu items={links} onNavigate={navigateTo} />}
    </>
  );
};

export default NavbarMain;
