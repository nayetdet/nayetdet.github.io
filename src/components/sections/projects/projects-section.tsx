import type { ReactElement } from 'react';
import { SectionTitle } from '@/components/common/section-title';
import { portfolio } from '@/data/portfolio';
import { sections } from '@/constants/sections';
import ProjectCard from '@/components/sections/projects/cards/project-card';

export const ProjectsSection = (): ReactElement | null => {
  if (portfolio.projects.length === 0) {
    return null;
  }

  return (
    <section
      id={sections.projects.id}
      className="bg-gray-50 pt-32 pb-8 dark:bg-[#121212]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {portfolio.projects.map((project) => (
            <ProjectCard
              key={project.name}
              images={project.images}
              title={project.name}
              description={project.description}
              date={project.date}
              tags={project.technologies}
              siteUrl={project.website}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
