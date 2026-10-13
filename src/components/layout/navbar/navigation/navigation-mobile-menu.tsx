import { memo, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import type { Section } from '@/constants/sections';
import { NavigationItems } from '@/components/layout/navbar/navigation/navigation-items';
import { SheetContent, SheetTitle } from '@/components/ui/sheet';

interface NavigationMobileMenuProps {
  items: readonly Section[];
  activeSectionId: Section['id'];
  onNavigate: (sectionId: Section['id']) => void;
}

export const NavigationMobileMenu = memo(
  ({
    items,
    activeSectionId,
    onNavigate,
  }: NavigationMobileMenuProps): ReactElement => {
    const { t } = useTranslation();
    return (
      <SheetContent
        side="top"
        showCloseButton={false}
        className="inset-0 h-dvh w-full gap-0 border-0 bg-gray-50 p-0 shadow-none md:hidden dark:bg-[#101010]"
      >
        <SheetTitle className="sr-only">
          {t('navigation.mobileMenu')}
        </SheetTitle>
        <nav
          className="flex h-full flex-col items-center justify-center"
          aria-label={t('navigation.mobileMenu')}
        >
          <NavigationItems
            items={items}
            activeSectionId={activeSectionId}
            onNavigate={onNavigate}
            variant="mobile"
          />
        </nav>
      </SheetContent>
    );
  },
);
