import type { Education } from '@/types/education';
import type { Contact } from '@/types/contact';
import type { Project } from '@/types/project';
import type { Specialty } from '@/types/specialty';

export interface Portfolio {
  name: { first: string; last: string };
  role: string;
  image: string;
  location: string;
  specialties: Specialty[];
  tagline: string;
  summary: string;
  biography: string;
  education: Education[];
  cv: string;
  contact: Contact;
  projects: Project[];
}
