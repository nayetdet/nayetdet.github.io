import type { ReactElement, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface TimelineItem {
  key: string;
  content: ReactNode;
  isOngoing?: boolean;
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
  connectionClassName = '-bottom-9',
  extendLastLine = false,
}: TimelineProps): ReactElement => (
  <div className={cn('relative', className)}>
    {leadingLineClassName && (
      <div className={cn('absolute', leadingLineClassName)} />
    )}

    {items.map((item: TimelineItem, index: number): ReactElement => {
      const hasNextItem = index < items.length - 1;
      const hasLine = hasNextItem || extendLastLine;

      return (
        <div
          className={cn(
            'relative grid grid-cols-[1rem_minmax(0,1fr)] gap-x-4 pb-5 last:pb-0',
            itemClassName,
          )}
          key={item.key}
        >
          <div className="relative">
            {hasLine && (
              <span
                className={cn(
                  'absolute top-4 left-1.75 w-0.5',
                  hasNextItem ? connectionClassName : 'bottom-0',
                  lineClassName,
                )}
                aria-hidden="true"
              />
            )}
            <span
              className={cn(
                'absolute top-2 left-0 z-10 size-4 rounded-full',
                item.isOngoing
                  ? 'border-[3px] border-white! bg-gray-300 dark:bg-[#404040]'
                  : lineClassName,
              )}
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
