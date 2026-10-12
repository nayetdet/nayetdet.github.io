import type { ReactElement, ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';

interface SectionTitleProps {
  children: ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps): ReactElement => {
  return (
    <div className="mb-16 sm:mb-20">
      <div className="flex items-end gap-6 sm:gap-8">
        <h2 className="text-5xl font-bold whitespace-nowrap text-[#191919] sm:text-6xl lg:text-7xl dark:text-white">
          {children}
        </h2>
        <Separator className="mb-2 h-0.75 min-w-0 flex-1 bg-gray-900/30 dark:bg-white/30" />
      </div>
    </div>
  );
};

export default SectionTitle;
