import { useRef, useState, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/common/section-title';
import { ProjectsPreview } from '@/components/sections/projects/projects-preview';
import ProjectCard from '@/components/sections/projects/card/project-card';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { Project } from '@/types/portfolio/projects/project';
import type { Projects } from '@/types/portfolio/projects/projects';

const INITIAL_PROJECT_COUNT = 2;

export const ProjectsSection = (): ReactElement => {
  const { t } = useTranslation();
  const { items }: Projects = usePortfolio('projects');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const scrollY: React.RefObject<number> = useRef<number>(0);

  return (
    <div className="bg-gray-50 py-12 sm:py-16 dark:bg-[#121212]">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <SectionTitle>{t('projects.title')}</SectionTitle>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.slice(0, INITIAL_PROJECT_COUNT).map((project: Project) => (
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
        {items.length > INITIAL_PROJECT_COUNT && (
          <div className="relative mt-6">
            <ProjectsPreview isExpanded={isExpanded}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {items.slice(INITIAL_PROJECT_COUNT).map((project: Project) => (
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
            </ProjectsPreview>
            {!isExpanded && (
              <button
                type="button"
                onClick={() => {
                  scrollY.current = window.scrollY;
                  setIsExpanded(true);
                }}
                className="absolute inset-x-0 bottom-10 mx-auto cursor-pointer text-sm font-medium text-[#404040] underline decoration-[#a3a3a3] underline-offset-4 transition-colors hover:text-[#191919] sm:bottom-12 dark:text-gray-300 dark:decoration-[#525252] dark:hover:text-white"
              >
                {t('projects.showMore')}
              </button>
            )}
          </div>
        )}
        {isExpanded && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => {
                setIsExpanded(false);
                window.scrollTo({ top: scrollY.current });
              }}
              className="cursor-pointer text-sm font-medium text-[#404040] underline decoration-[#a3a3a3] underline-offset-4 transition-colors hover:text-[#191919] dark:text-gray-300 dark:decoration-[#525252] dark:hover:text-white"
            >
              {t('projects.showLess')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
