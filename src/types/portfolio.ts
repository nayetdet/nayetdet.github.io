import type { Contact } from '@/types/contact';
import type { Education } from '@/types/education';
import type { Project } from '@/types/project';
import type { Specialty } from '@/types/specialty';
import type { TechStack } from '@/types/tech-stack';
import type { Trajectory } from '@/types/trajectory';

export interface Portfolio {
  name: { first: string; last: string };
  role: string;
  aboutImage: string;
  location: string;
  specialties: Specialty[];
  techStack: TechStack[];
  experienceImage: string;
  tagline: string;
  summary: string;
  biography: string;
  education: Education[];
  trajectory: Trajectory[];
  cv: string;
  contact: Contact;
  projects: Project[];
}
