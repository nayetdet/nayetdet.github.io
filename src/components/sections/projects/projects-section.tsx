import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/common/section-title';
import { usePortfolio } from '@/hooks/use-portfolio';
import ProjectCard from '@/components/sections/projects/card/project-card';
import type { Project } from '@/types/portfolio/projects/project';
import type { Projects } from '@/types/portfolio/projects/projects';

export const ProjectsSection = (): ReactElement => {
  const { t } = useTranslation();
  const projects: Projects = usePortfolio('projects');

  return (
    <div className="bg-gray-50 py-12 sm:py-16 dark:bg-[#121212]">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <SectionTitle>{t('projects.title')}</SectionTitle>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.items.map((project: Project): ReactElement => (
            <ProjectCard
              key={project.name}
              images={project.images}
              title={project.name}
              description={project.description}
              tags={project.techStack}
              siteUrl={project.website}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
