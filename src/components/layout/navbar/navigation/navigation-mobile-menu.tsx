import type { ReactElement } from 'react';
import type { Section } from '@/constants/sections';
import { NavigationItems } from '@/components/layout/navbar/navigation/navigation-items';

interface NavigationMobileMenuProps {
  items: readonly Section[];
  activeSectionId: Section['id'];
  onNavigate: (sectionId: Section['id']) => void;
}

export const NavigationMobileMenu = ({
  items,
  activeSectionId,
  onNavigate,
}: NavigationMobileMenuProps): ReactElement => (
  <div
    className="fixed inset-0 z-40 bg-gray-50 md:hidden dark:bg-[#101010]"
    role="menu"
    aria-label="Mobile menu"
  >
    <div className="flex h-screen flex-col items-center justify-center">
      <NavigationItems
        items={items}
        activeSectionId={activeSectionId}
        onNavigate={onNavigate}
        variant="mobile"
      />
    </div>
  </div>
);
