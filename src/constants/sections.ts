import {
  BriefcaseBusiness,
  FolderGit2,
  House,
  Mail,
  UserRound,
  type LucideIcon,
} from 'lucide-react';
import { portfolios } from '@/data/portfolios';

export type SectionId =
  'home' | 'about' | 'experience' | 'projects' | 'contact';

export interface Section {
  id: SectionId;
  href: string;
  icon: LucideIcon;
}

export const sections = {
  home: { id: 'home', href: '#home', icon: House },
  about: { id: 'about', href: '#about', icon: UserRound },
  experience: {
    id: 'experience',
    href: '#experience',
    icon: BriefcaseBusiness,
  },
  projects: { id: 'projects', href: '#projects', icon: FolderGit2 },
  contact: { id: 'contact', href: '#contact', icon: Mail },
} as const satisfies Record<string, Section>;

export const navigationSections: Section[] = Object.values(sections).filter(
  (section: Section): boolean =>
    section.id !== sections.projects.id ||
    Object.values(portfolios).some(
      (portfolio): boolean => portfolio.projects.length > 0,
    ),
);
