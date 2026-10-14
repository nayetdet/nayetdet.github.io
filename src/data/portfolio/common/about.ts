import { Layers3, PanelsTopLeft, Server, Settings2 } from 'lucide-react';
import profileImage from '@/assets/about/cover.jpg';
import type { About } from '@/types/portfolio/about/about';

export const commonAbout = {
  identity: {
    firstName: 'João Pedro',
    lastName: 'Moreira',
    image: profileImage,
  },
  contact: {
    email: 'jpmoreirac21@gmail.com',
    location: 'Fortaleza, Ceará, Brasil',
    linkedin: 'https://www.linkedin.com/in/jpmoreiracampos',
    github: 'https://github.com/nayetdet',
    gitlab: 'https://gitlab.com/nayetdet',
  },
  specialties: [
    { name: 'Full Stack', icon: Layers3 },
    { name: 'Backend', icon: Server },
    { name: 'Frontend', icon: PanelsTopLeft },
    { name: 'DevOps', icon: Settings2 },
  ],
} satisfies Pick<About, 'contact' | 'specialties'> & {
  identity: Omit<About['identity'], 'role'>;
};
