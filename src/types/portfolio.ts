import type { Education } from '@/types/education';
import type { Contact } from '@/types/contact';
import type { Project } from '@/types/project';
import type { Specialty } from '@/types/specialty';
import type { TechStack } from '@/types/tech-stack';

export interface Portfolio {
  name: { first: string; last: string };
  role: string;
  image: string;
  location: string;
  specialties: Specialty[];
  techStack: TechStack[];
  tagline: string;
  summary: string;
  biography: string;
  education: Education[];
  cv: string;
  contact: Contact;
  projects: Project[];
}
