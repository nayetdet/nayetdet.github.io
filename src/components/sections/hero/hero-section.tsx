import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { RiMailLine } from 'react-icons/ri';
import { SocialNetworks } from '@/components/common/social-networks';
import NavbarMain from '@/components/layout/navbar/navbar-main';
import { usePortfolio } from '@/hooks/use-portfolio';
import { useTheme, type UseThemeReturn } from '@/hooks/use-theme';
import { sections } from '@/constants/sections';
import { HeroBackground } from '@/components/sections/hero/background/hero-background';
import { HeroContent } from '@/components/sections/hero/introduction/hero-content';
import { HeroScrollIndicator } from '@/components/sections/hero/introduction/hero-scroll-indicator';
import type { Portfolio } from '@/types/portfolio';

export const HeroSection = (): ReactElement => {
  const { t } = useTranslation();
  const { isDarkTheme }: UseThemeReturn = useTheme();
  const portfolio: Portfolio = usePortfolio();

  return (
    <section
      id={sections.home.id}
      className="relative h-dvh overflow-hidden bg-white dark:bg-black"
    >
      <HeroBackground isDarkTheme={isDarkTheme} />
      <NavbarMain />
      <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-3">
        <SocialNetworks className="flex-col gap-3" iconClassName="size-6" />
        <a
          href={`mailto:${portfolio.contact.email}`}
          className="flex size-6  items-center justify-center text-[#191919] transition-opacity duration-300 hover:opacity-60 dark:text-white"
          aria-label={t('contact.email')}
        >
          <RiMailLine className="size-6 " aria-hidden="true" />
        </a>
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-24 sm:px-12 md:px-24">
        <HeroContent />
        <HeroScrollIndicator />
      </div>
    </section>
  );
};

export default HeroSection;
