import type { ReactElement } from 'react';
import { Badge } from '@/components/ui/badge';
import type { TechStackItem } from '@/types/portfolio/tech-stack/tech-stack-item';

interface ProjectCardInfoProps {
  title: string;
  description: string;
  tags: TechStackItem[];
}

export const ProjectCardInfo = ({
  title,
  description,
  tags,
}: ProjectCardInfoProps): ReactElement => (
  <div className="flex flex-1 flex-col p-6">
    <h3 className="mb-2 text-2xl font-bold tracking-tight text-[#191919] dark:text-white">
      {title}
    </h3>
    <p className="mb-4 text-sm/6 text-[#404040] dark:text-gray-300">
      {description}
    </p>
    <div className="flex flex-col items-start gap-3">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: TechStackItem): ReactElement => {
          const Icon = tag.icon;

          return (
            <Badge
              key={tag.name}
              variant="secondary"
              className="inline-flex items-center gap-2 rounded-full border-0 bg-gray-100 px-3 py-1.5 text-xs font-medium text-[#404040] transition-colors hover:bg-gray-200 sm:px-4 sm:py-2 sm:text-sm dark:bg-[#303030] dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <Icon aria-hidden="true" className="size-4 shrink-0" />
              {tag.name}
            </Badge>
          );
        })}
      </div>
    </div>
  </div>
);
