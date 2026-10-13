import { portfolios } from '@/data/portfolios';

export type SectionId = 'home' | 'about' | 'projects' | 'contact';

export interface Section {
  id: SectionId;
  href: string;
}

export const sections = {
  home: { id: 'home', href: '#home' },
  about: { id: 'about', href: '#about' },
  projects: { id: 'projects', href: '#projects' },
  contact: { id: 'contact', href: '#contact' },
} as const satisfies Record<string, Section>;

export const navigationSections: Section[] = Object.values(sections).filter(
  (section: Section): boolean =>
    section.id !== sections.projects.id ||
    Object.values(portfolios).some(
      (portfolio): boolean => portfolio.projects.length > 0,
    ),
);
