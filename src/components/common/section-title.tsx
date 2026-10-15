import type { ReactElement, ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';

interface SectionTitleProps {
  children: ReactNode;
  description?: ReactNode;
}

export const SectionTitle = ({
  children,
  description,
}: SectionTitleProps): ReactElement => {
  return (
    <div
      className={
        description
          ? 'mb-[clamp(2.5rem,4vw,4rem)]'
          : 'mb-[clamp(3rem,6vw,5.5rem)]'
      }
    >
      <div className="flex items-end gap-[clamp(1.5rem,3vw,2.75rem)]">
        <h2 className="text-[clamp(3rem,6.5vw,7.5rem)] leading-[0.98] font-medium tracking-[-0.055em] whitespace-nowrap text-[#191919] dark:text-white">
          {children}
        </h2>
        <Separator className="mb-[0.12em] h-0.75 min-w-0 flex-1 rounded-full bg-gray-900/35 dark:bg-white/35" />
      </div>
      {description && (
        <p className="mt-[clamp(3rem,6vw,5.5rem)] max-w-xl text-[clamp(1.125rem,1.4vw,1.375rem)]/[1.55] font-normal tracking-[-0.02em] text-[#404040] dark:text-gray-300">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
