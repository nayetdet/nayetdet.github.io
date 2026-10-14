import { use } from 'react';
import { useLanguage } from '@/hooks/use-language';
import type { About } from '@/types/portfolio/about/about';
import type { Projects } from '@/types/portfolio/projects/projects';
import type { TechStack } from '@/types/portfolio/tech-stack/tech-stack';
import type { Trajectory } from '@/types/portfolio/trajectory/trajectory';

const portfolioPromises = new Map<string, Promise<unknown>>();

const portfolioLoaders = {
  about: {
    'en-US': () =>
      import('@/data/portfolio/en-us/about').then(({ about }) => about),
    'pt-BR': () =>
      import('@/data/portfolio/pt-br/about').then(({ about }) => about),
  },
  'tech-stack': {
    'en-US': () =>
      import('@/data/portfolio/common/tech-stack').then(
        ({ techStack }) => techStack,
      ),
    'pt-BR': () =>
      import('@/data/portfolio/common/tech-stack').then(
        ({ techStack }) => techStack,
      ),
  },
  trajectory: {
    'en-US': () =>
      import('@/data/portfolio/en-us/trajectory').then(
        ({ trajectory }) => trajectory,
      ),
    'pt-BR': () =>
      import('@/data/portfolio/pt-br/trajectory').then(
        ({ trajectory }) => trajectory,
      ),
  },
  projects: {
    'en-US': () =>
      import('@/data/portfolio/en-us/projects').then(
        ({ projects }) => projects,
      ),
    'pt-BR': () =>
      import('@/data/portfolio/pt-br/projects').then(
        ({ projects }) => projects,
      ),
  },
};

export function usePortfolio(section: 'about'): About;
export function usePortfolio(section: 'tech-stack'): TechStack;
export function usePortfolio(section: 'trajectory'): Trajectory;
export function usePortfolio(section: 'projects'): Projects;
export function usePortfolio(
  section: 'about' | 'tech-stack' | 'trajectory' | 'projects',
): About | TechStack | Trajectory | Projects {
  const language = useLanguage().language;
  const sectionDataPromise = (portfolioPromises.get(`${section}:${language}`) ??
    portfolioLoaders[section][language]()) as Promise<
    About | TechStack | Trajectory | Projects
  >;

  portfolioPromises.set(`${section}:${language}`, sectionDataPromise);
  return use(sectionDataPromise);
}

export default usePortfolio;
