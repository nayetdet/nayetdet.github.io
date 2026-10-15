import { useCallback, useEffect, useState, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '@/components/common/logo';
import { NavbarItems } from '@/components/layout/navbar/navbar-items';
import { LanguageToggle } from '@/components/layout/preferences/language-toggle';
import { ThemeToggle } from '@/components/layout/preferences/theme-toggle';
import { NavbarMenu } from '@/components/layout/navbar/navbar-menu';
import { NavbarMenuToggle } from '@/components/layout/navbar/navbar-menu-toggle';
import { Sheet } from '@/components/ui/sheet';
import GlassSurface from '@/components/ui/glass-surface';
import { sections, type Section, type SectionId } from '@/constants/sections';
import { useActiveSection } from '@/hooks/use-active-section';
import { useMobile } from '@/hooks/use-mobile';
import { useTheme, type UseThemeReturn } from '@/hooks/use-theme';
import { scrollTo } from '@/utils/scroll';

const items: Section[] = Object.values(sections);

export const Navbar = (): ReactElement => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isMobile: boolean = useMobile();
  const activeSectionId: SectionId = useActiveSection();
  const { isDarkTheme }: UseThemeReturn = useTheme();

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
        <GlassSurface
          width="inherit"
          height={56}
          borderRadius={999}
          borderWidth={0.09}
          backgroundOpacity={isDarkTheme ? 0.12 : 0.3}
          blur={10}
          saturation={1.05}
          showRim={false}
          className="min-w-full"
          style={{
            colorScheme: isDarkTheme ? 'dark' : 'light',
            background: isDarkTheme
              ? 'rgb(24 24 27 / 0.48)'
              : 'rgb(255 255 255 / 0.56)',
            WebkitBackdropFilter: 'blur(10px) saturate(1.05)',
            backdropFilter: 'blur(10px) saturate(1.05)',
            boxShadow: isDarkTheme
              ? '0 8px 28px rgb(0 0 0 / 0.3)'
              : '0 8px 28px rgb(0 0 0 / 0.12)',
          }}
        >
          <div className="flex size-full items-center justify-center px-6 sm:px-10">
            <div className="hidden items-center gap-6 md:flex">
              <NavbarItems
                items={items}
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
        </GlassSurface>
      </nav>
      <NavbarMenu
        items={items}
        activeSectionId={activeSectionId}
        onNavigate={navigateTo}
        onClose={(): void => setIsMenuOpen(false)}
      />
    </Sheet>
  );
};

export default Navbar;
