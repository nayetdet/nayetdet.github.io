import type { ReactElement } from 'react';
import type { IconType } from 'react-icons';
import { Badge } from '@/components/ui/badge';
import { portfolio } from '@/data/portfolio';
import type { Specialty } from '@/types/specialty';

export const AboutProfileSpecialties = (): ReactElement => (
  <div className="mb-6 flex flex-wrap gap-2 sm:mb-8 sm:gap-3">
    {portfolio.specialties.map((specialty: Specialty): ReactElement => {
      const Icon: IconType | undefined = specialty.icon;

      return (
        <Badge
          key={specialty.name}
          variant="secondary"
          className="inline-flex items-center gap-1.5 rounded-full border-0 bg-[#e5e5e5]/80 px-3 py-1.5 text-xs font-medium text-[#191919] transition-colors sm:px-4 sm:py-2 sm:text-sm dark:bg-[#2a2a2a]/80 dark:text-white"
        >
          {Icon && <Icon className="size-3.5" aria-hidden="true" />}
          {specialty.name}
        </Badge>
      );
    })}
  </div>
);
