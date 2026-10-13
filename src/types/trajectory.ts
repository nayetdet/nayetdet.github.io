import type { TechStackItem } from '@/types/tech-stack';

export interface Trajectory {
  name: string;
  position: string;
  startDate: string;
  endDate?: string;
  summary: string;
  techStack: TechStackItem[];
}
