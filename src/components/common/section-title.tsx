import type { ReactElement, ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';

interface SectionTitleProps {
  children: ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps): ReactElement => {
  return (
    <div className="mb-12 sm:mb-16">
      <div className="flex items-end gap-5 sm:gap-6">
        <h2 className="text-5xl leading-none font-bold tracking-tight whitespace-nowrap text-[#191919] sm:text-6xl lg:text-7xl dark:text-white">
          {children}
        </h2>
        <Separator className="mb-1.5 h-0.5 min-w-0 flex-1 bg-gray-900/30 dark:bg-white/30" />
      </div>
    </div>
  );
};

export default SectionTitle;
