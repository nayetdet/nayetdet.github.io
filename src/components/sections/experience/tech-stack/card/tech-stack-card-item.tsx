import type { ReactElement } from 'react';
import type { TechStackItem } from '@/types/portfolio/tech-stack/tech-stack-item';

interface TechStackCardItemProps {
  item: TechStackItem;
}

export const TechStackCardItem = ({
  item,
}: TechStackCardItemProps): ReactElement => {
  const { name, icon: Icon } = item;

  return (
    <li className="inline-flex items-center gap-2 rounded-full border-0 bg-[#e5e5e5]/80 px-4 py-2.5 text-[0.9375rem] font-semibold text-[#191919] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4d4d4] dark:bg-[#2a2a2a]/80 dark:text-white dark:hover:bg-[#404040]">
      <Icon
        className="size-5 shrink-0 text-[#191919] dark:text-white"
        aria-hidden="true"
      />
      <span>{name}</span>
    </li>
  );
};
