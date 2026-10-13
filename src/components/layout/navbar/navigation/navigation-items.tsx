import type { ReactElement } from 'react';
import type { Section } from '@/constants/sections';

interface NavigationItemsProps {
  items: readonly Section[];
  activeSectionId: Section['id'];
  onNavigate: (sectionId: Section['id']) => void;
  variant: 'desktop' | 'mobile';
}

export const NavigationItems = ({
  items,
  activeSectionId,
  onNavigate,
  variant,
}: NavigationItemsProps): ReactElement => {
  const isMobile: boolean = variant === 'mobile';

  return (
    <ul
      className={isMobile ? 'space-y-8 text-center' : 'flex items-center gap-1'}
    >
      {items.map(({ label, id }: Section): ReactElement => {
        const isActive: boolean = id === activeSectionId;
        const itemClassName: string = isMobile
          ? `inline-block cursor-pointer text-3xl transition-all duration-300 ${isActive ? 'font-bold text-[#191919] dark:text-white' : 'font-medium text-gray-500 hover:scale-110 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}`
          : `group relative cursor-pointer overflow-hidden rounded-full px-3 py-2 text-sm font-semibold transition-all duration-300 ${isActive ? 'text-[#191919] dark:text-white' : 'text-gray-500 hover:text-[#191919] dark:text-gray-400 dark:hover:text-white'}`;

        return (
          <li key={id} role={isMobile ? 'none' : undefined}>
            <button
              type="button"
              onClick={(): void => onNavigate(id)}
              className={itemClassName}
              aria-label={label}
              aria-current={isActive ? 'location' : undefined}
              role={isMobile ? 'menuitem' : undefined}
            >
              {isMobile ? (
                label
              ) : (
                <span className="group relative block overflow-hidden whitespace-nowrap">
                  {isActive ? (
                    label
                  ) : (
                    <>
                      <span className="block translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-125%] group-hover:skew-y-8">
                        {label}
                      </span>
                      <span className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                        {label}
                      </span>
                    </>
                  )}
                </span>
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
