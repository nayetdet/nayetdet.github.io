import type { ReactElement } from 'react';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { TechStackItem } from '@/types/portfolio/tech-stack/tech-stack-item';

interface ProjectCardInfoProps {
  title: string;
  description: string;
  tags: TechStackItem[];
  siteUrl: string;
  websiteAriaLabel: string;
}

export const ProjectCardInfo = ({
  title,
  description,
  tags,
  siteUrl,
  websiteAriaLabel,
}: ProjectCardInfoProps): ReactElement => (
  <div className="flex flex-1 flex-col p-6">
    <h3 className="mb-2 text-2xl font-bold tracking-tight text-[#191919] dark:text-white">
      <a
        href={siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={websiteAriaLabel}
        className="inline-flex items-center gap-2 transition-colors hover:text-[#555555] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#191919] dark:hover:text-gray-300 dark:focus-visible:outline-white"
      >
        {title}
        <ExternalLink className="size-4" aria-hidden="true" />
      </a>
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
              className="inline-flex items-center gap-2 rounded-full border-0 bg-[#e5e5e5]/80 px-3 py-1.5 text-xs font-medium text-[#191919] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4d4d4] sm:px-4 sm:py-2 sm:text-sm dark:bg-[#2a2a2a]/80 dark:text-white dark:hover:bg-[#404040]"
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
