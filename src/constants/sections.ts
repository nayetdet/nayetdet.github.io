import {
  BriefcaseBusiness,
  FolderGit2,
  House,
  Mail,
  UserRound,
} from 'lucide-react';
import type { IconType } from 'react-icons';

export type SectionId =
  'home' | 'about' | 'experience' | 'projects' | 'contact';

export interface Section {
  id: SectionId;
  icon: IconType;
}

export const sections = {
  home: { id: 'home', icon: House },
  about: { id: 'about', icon: UserRound },
  experience: { id: 'experience', icon: BriefcaseBusiness },
  projects: { id: 'projects', icon: FolderGit2 },
  contact: { id: 'contact', icon: Mail },
} as const satisfies Record<string, Section>;
