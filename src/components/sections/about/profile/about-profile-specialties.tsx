import type { ReactElement } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { Portfolio } from '@/types/portfolio';
import type { Specialty } from '@/types/specialty';

export const AboutProfileSpecialties = (): ReactElement => {
  const { specialties }: Portfolio = usePortfolio();

  return (
    <div className="mb-6 flex flex-wrap gap-2 sm:mb-8 sm:gap-3">
      {specialties.map((specialty: Specialty): ReactElement => {
        const Icon: LucideIcon | undefined = specialty.icon;

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
};
