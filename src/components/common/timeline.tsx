import type { ReactElement, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { isOngoing } from '@/utils/date';

export interface TimelineItem {
  key: string;
  content: ReactNode;
  startDate: string;
  endDate: string | undefined;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
  itemClassName?: string;
  leadingLineClassName?: string;
  lineClassName?: string;
  connectionClassName?: string;
  extendLastLine?: boolean;
}

export const Timeline = ({
  items,
  className,
  itemClassName,
  leadingLineClassName,
  lineClassName = 'bg-[#191919] dark:bg-white',
  connectionClassName = '-bottom-10',
  extendLastLine = false,
}: TimelineProps): ReactElement => (
  <div className={cn('relative', className)}>
    {leadingLineClassName && (
      <div className={cn('absolute', leadingLineClassName)} />
    )}
    {extendLastLine && items.length > 0 && (
      <span
        className={cn('absolute top-4 bottom-0 left-2.5 w-0.5', lineClassName)}
        aria-hidden="true"
      />
    )}

    {items.map((item: TimelineItem, index: number): ReactElement => {
      const hasNextItem = index < items.length - 1;
      const ongoing = isOngoing(item.endDate);

      return (
        <div
          className={cn(
            'relative grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-4 pb-[clamp(3.5rem,5vw,5rem)] last:pb-0 sm:gap-x-5',
            itemClassName,
          )}
          key={item.key}
        >
          <div className="relative">
            {hasNextItem && !extendLastLine && (
              <span
                className={cn(
                  'absolute top-4 left-2.5 w-0.5',
                  connectionClassName,
                  lineClassName,
                )}
                aria-hidden="true"
              />
            )}
            <span
              className={cn(
                'absolute top-1 left-0.5 z-10 size-5 rounded-full',
                ongoing ? 'border-[3px]' : lineClassName,
              )}
              style={
                ongoing
                  ? {
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--foreground)',
                    }
                  : undefined
              }
              aria-hidden="true"
            />
          </div>
          {item.content}
        </div>
      );
    })}
  </div>
);

export default Timeline;
