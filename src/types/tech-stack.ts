import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';

export type TechStackCategory =
  'backend' | 'frontend' | 'databases' | 'infrastructure';

export interface TechStackItem {
  name: string;
  icon: IconType;
}

export interface TechStack {
  category: TechStackCategory;
  items: TechStackItem[];
  icon: LucideIcon;
}
