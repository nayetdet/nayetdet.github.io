import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { ProjectCardGallery } from '@/components/sections/projects/card/project-card-gallery';
import { ProjectCardInfo } from '@/components/sections/projects/card/project-card-info';
import type { TechStackItem } from '@/types/portfolio/tech-stack/tech-stack-item';

interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  tags: TechStackItem[];
  siteUrl: string;
}

export const ProjectCard = ({
  images,
  title,
  description,
  tags,
  siteUrl,
}: ProjectCardProps): ReactElement => {
  const { t } = useTranslation();
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#191919] bg-white shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md dark:border-0 dark:bg-[#1a1a1a] dark:hover:bg-[#222222]">
      <ProjectCardGallery
        images={images}
        title={title}
        previousSlideLabel={t('projects.previousImage')}
        nextSlideLabel={t('projects.nextImage')}
      />
      <ProjectCardInfo
        title={title}
        description={description}
        tags={tags}
        siteUrl={siteUrl}
        websiteAriaLabel={t('projects.viewProjectWebsite', { title })}
      />
    </Card>
  );
};

export default ProjectCard;
