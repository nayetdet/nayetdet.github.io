import type { ReactElement } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { About } from '@/types/portfolio/about/about';
import type { Specialty } from '@/types/portfolio/about/specialty';

export const AboutProfileSpecialties = (): ReactElement => {
  const about: About = usePortfolio('about');

  return (
    <div className="mb-[clamp(2.5rem,4vw,4rem)] flex flex-wrap gap-2">
      {about.specialties.map((specialty: Specialty): ReactElement => {
        const Icon: LucideIcon | undefined = specialty.icon;

        return (
          <Badge
            key={specialty.name}
            variant="secondary"
            className="inline-flex items-center gap-2 rounded-full border-0 bg-[#e5e5e5]/80 px-3.5 py-2 text-sm font-semibold text-[#191919] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4d4d4] sm:px-4 sm:py-2.5 sm:text-[0.9375rem] dark:bg-[#2a2a2a]/80 dark:text-white dark:hover:bg-[#404040]"
          >
            {Icon && <Icon className="size-4.5" aria-hidden="true" />}
            {specialty.name}
          </Badge>
        );
      })}
    </div>
  );
};
