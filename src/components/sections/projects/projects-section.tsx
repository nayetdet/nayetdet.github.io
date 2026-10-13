import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/common/section-title';
import { usePortfolio } from '@/hooks/use-portfolio';
import { sections } from '@/constants/sections';
import ProjectCard from '@/components/sections/projects/card/project-card';
import type { Portfolio } from '@/types/portfolio';
import type { Project } from '@/types/project';

export const ProjectsSection = (): ReactElement | null => {
  const { t } = useTranslation();
  const portfolio: Portfolio = usePortfolio();
  if (portfolio.projects.length === 0) {
    return null;
  }

  return (
    <section
      id={sections.projects.id}
      className="bg-gray-50 pt-32 pb-8 dark:bg-[#121212]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <SectionTitle>{t('projects.title')}</SectionTitle>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {portfolio.projects.map((project: Project): ReactElement => (
            <ProjectCard
              key={project.name}
              images={project.images}
              title={project.name}
              description={project.description}
              date={project.date}
              tags={project.techStack}
              siteUrl={project.website}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
