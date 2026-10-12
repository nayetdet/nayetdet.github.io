import type { ReactElement } from 'react';
import type { Section } from '@/constants/sections';

interface NavigationItemsProps {
  items: readonly Section[];
  onNavigate: (sectionId: Section['id']) => void;
  variant: 'desktop' | 'mobile';
}

export const NavigationItems = ({
  items,
  onNavigate,
  variant,
}: NavigationItemsProps): ReactElement => {
  const isMobile: boolean = variant === 'mobile';

  return (
    <ul
      className={
        isMobile ? 'space-y-8 text-center' : 'flex items-baseline space-x-2'
      }
    >
      {items.map(({ label, id }: Section): ReactElement => (
        <li key={id} role={isMobile ? 'none' : undefined}>
          <button
            type="button"
            onClick={(): void => onNavigate(id)}
            className={
              isMobile
                ? 'inline-block cursor-pointer text-3xl font-bold text-gray-900 transition-all duration-300 hover:scale-110 hover:text-gray-600 dark:text-white dark:hover:text-gray-300'
                : 'group relative cursor-pointer overflow-hidden rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 dark:text-gray-200'
            }
            aria-label={label}
            role={isMobile ? 'menuitem' : undefined}
          >
            {isMobile ? (
              label
            ) : (
              <span className="group relative block overflow-hidden whitespace-nowrap">
                <span className="block translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-125%] group-hover:skew-y-8">
                  {label}
                </span>
                <span className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  {label}
                </span>
              </span>
            )}
          </button>
        </li>
      ))}
    </ul>
  );
};
