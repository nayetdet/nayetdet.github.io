import type { TechStackItem } from '@/types/tech-stack';

export interface Project {
  name: string;
  description: string;
  date?: string;
  images: string[];
  techStack: TechStackItem[];
  website: string;
}
