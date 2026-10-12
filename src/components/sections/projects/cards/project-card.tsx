import type { ReactElement } from 'react';
import { RiExternalLinkLine } from 'react-icons/ri';
import { Card } from '@/components/ui/card';
import { ProjectCardGallery } from '@/components/sections/projects/cards/project-card-gallery';
import { ProjectCardInfo } from '@/components/sections/projects/cards/project-card-info';

interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  date: string;
  tags: string[];
  siteUrl?: string;
}

export const ProjectCard = ({
  images,
  title,
  description,
  date,
  tags,
  siteUrl,
}: ProjectCardProps): ReactElement => {
  return (
    <a
      href={siteUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} website`}
      className="group block cursor-pointer"
    >
      <Card className="overflow-hidden rounded-2xl border-0 bg-white shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md dark:bg-[#1a1a1a] dark:hover:bg-[#222222]">
        <div className="relative">
          <ProjectCardGallery images={images} title={title} />
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <div className="text-center text-white">
              <span className="flex items-center gap-2 text-xl font-bold">
                View website
                <RiExternalLinkLine className="size-6 " aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
        <ProjectCardInfo
          title={title}
          description={description}
          date={date}
          tags={tags}
        />
      </Card>
    </a>
  );
};

export default ProjectCard;
