import type { ReactElement } from 'react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardInfoProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export const ProjectCardInfo = ({
  title,
  description,
  date,
  tags,
}: ProjectCardInfoProps): ReactElement => (
  <div className="p-6">
    <h3 className="mb-2 -translate-y-px text-2xl font-bold text-[#191919] dark:text-white">
      {title}
    </h3>
    <p className="mb-4 text-sm/relaxed text-[#404040] dark:text-gray-300">
      {description}
    </p>
    <div className="flex flex-wrap items-center justify-between gap-3">
      <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string): ReactElement => (
          <Badge
            key={tag}
            variant="secondary"
            className="rounded-full border-0 bg-gray-100 px-3 py-1 text-xs font-medium text-[#404040] transition-colors hover:bg-gray-200 dark:bg-[#303030] dark:text-gray-300 dark:hover:bg-gray-700"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  </div>
);
