import type { ReactElement } from 'react';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
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
  <div className="flex flex-1 flex-col p-[clamp(1.5rem,2.5vw,2.5rem)]">
    <h3 className="mb-4.5 text-[clamp(1.875rem,2.8vw,3.125rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-[#191919] dark:text-white">
      <a
        href={siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={websiteAriaLabel}
        className="inline-flex items-center gap-2 transition-colors hover:text-[#555555] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#191919] dark:hover:text-gray-300 dark:focus-visible:outline-white"
      >
        {title}
        <ExternalLink className="size-[0.9em]" aria-hidden="true" />
      </a>
    </h3>
    <p className="text-[1.0625rem]/[1.65] font-medium tracking-[-0.01em] text-[#404040] dark:text-gray-300">
      {description}
    </p>
    <div className="mt-auto pt-6">
      <Carousel
        opts={{ align: 'start', dragFree: true }}
        aria-label="Tecnologias do projeto"
        className="w-full cursor-grab touch-pan-y select-none active:cursor-grabbing"
      >
        <CarouselContent className="-ml-2">
          {tags.map((tag: TechStackItem): ReactElement => {
            const Icon = tag.icon;

            return (
              <CarouselItem key={tag.name} className="basis-auto pl-2">
                <Badge
                  variant="secondary"
                  className="inline-flex items-center gap-2 rounded-full border-0 bg-[#e5e5e5]/80 px-4 py-2.5 text-[0.9375rem] font-semibold text-[#191919] shadow-[0_2px_6px_rgb(25_25_25/0.12)] ring-1 ring-[#191919]/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4d4d4] dark:bg-[#2a2a2a]/80 dark:text-white dark:shadow-none dark:ring-0 dark:hover:bg-[#404040]"
                >
                  <Icon aria-hidden="true" className="size-5 shrink-0" />
                  {tag.name}
                </Badge>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious
          aria-label="Tecnologia anterior"
          className="top-1/2 -left-6 size-6 rounded-none border-0 bg-transparent p-0 text-[#191919] shadow-none hover:scale-110 hover:bg-transparent hover:text-[#191919] disabled:opacity-30 xl:-left-7 2xl:-left-8 dark:text-white dark:hover:bg-transparent dark:hover:text-white"
        />
        <CarouselNext
          aria-label="Próxima tecnologia"
          className="top-1/2 -right-6 size-6 rounded-none border-0 bg-transparent p-0 text-[#191919] shadow-none hover:scale-110 hover:bg-transparent hover:text-[#191919] disabled:opacity-30 xl:-right-7 2xl:-right-8 dark:text-white dark:hover:bg-transparent dark:hover:text-white"
        />
      </Carousel>
    </div>
  </div>
);
