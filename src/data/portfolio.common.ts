import {
  Database,
  Layers3,
  PanelsTopLeft,
  Server,
  Settings2,
} from 'lucide-react';
import { techStacks } from '@/data/tech-stacks';
import type { Portfolio } from '@/types/portfolio';

export const portfolioCommon = {
  name: { first: 'João Pedro', last: 'Moreira' },
  aboutImage: '/images/about/profile.jpg',
  location: 'Fortaleza, Ceará, Brasil',
  specialties: [
    { name: 'Full Stack', icon: Layers3 },
    { name: 'Backend', icon: Server },
    { name: 'Frontend', icon: PanelsTopLeft },
    { name: 'DevOps', icon: Settings2 },
  ],
  techStack: [
    {
      icon: Server,
      category: 'backend',
      items: [
        techStacks.java,
        techStacks.spring,
        techStacks.python,
        techStacks.fastApi,
        techStacks.django,
        techStacks.flask,
        techStacks.nodeJs,
        techStacks.keycloak,
        techStacks.rabbitMq,
        techStacks.kafka,
      ],
    },
    {
      icon: PanelsTopLeft,
      category: 'frontend',
      items: [
        techStacks.javascript,
        techStacks.typescript,
        techStacks.react,
        techStacks.nextJs,
        techStacks.html,
        techStacks.css,
        techStacks.sass,
        techStacks.tailwind,
      ],
    },
    {
      icon: Database,
      category: 'databases',
      items: [
        techStacks.postgresql,
        techStacks.mysql,
        techStacks.mongodb,
        techStacks.redis,
      ],
    },
    {
      icon: Settings2,
      category: 'infrastructure',
      items: [
        techStacks.docker,
        techStacks.kubernetes,
        techStacks.helm,
        techStacks.argocd,
        techStacks.nginx,
        techStacks.aws,
        techStacks.terraform,
        techStacks.ansible,
        techStacks.githubActions,
        techStacks.git,
        techStacks.linux,
        techStacks.bash,
      ],
    },
  ],
  experienceImage: '/images/experience/technical-presentation.jpg',
  contact: {
    email: 'jpmoreirac21@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jpmoreiracampos',
    github: 'https://github.com/nayetdet',
    gitlab: 'https://gitlab.com/nayetdet',
  },
  projects: [],
} satisfies Pick<
  Portfolio,
  | 'name'
  | 'aboutImage'
  | 'location'
  | 'specialties'
  | 'techStack'
  | 'experienceImage'
  | 'contact'
  | 'projects'
>;
