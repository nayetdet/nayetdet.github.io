import type { ReactElement } from 'react';
import type { TechStackItem as TechStackItemData } from '@/types/tech-stack';

interface TechStackCardItemProps {
  item: TechStackItemData;
}

export const TechStackCardItem = ({
  item,
}: TechStackCardItemProps): ReactElement => {
  const { name, icon: Icon } = item;

  return (
    <li className="inline-flex items-center gap-2 rounded-full border-0 bg-[#e5e5e5]/80 px-3 py-1.5 text-xs font-medium text-[#191919] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4d4d4] sm:px-4 sm:py-2 sm:text-sm dark:bg-[#2a2a2a]/80 dark:text-white dark:hover:bg-[#404040]">
      <Icon
        className="size-4 shrink-0 text-[#191919] dark:text-white"
        aria-hidden="true"
      />
      <span>{name}</span>
    </li>
  );
};
