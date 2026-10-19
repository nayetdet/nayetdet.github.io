import { CloudUpload, Database, PanelsTopLeft, Server } from 'lucide-react';
import { techStacks } from '@/constants/tech-stacks';
import type { TechStack } from '@/types/portfolio/tech-stack/tech-stack';

export const techStack: TechStack = {
  categories: [
    {
      icon: Server,
      category: 'backend',
      items: [
        techStacks.java,
        techStacks.springBoot,
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
      icon: CloudUpload,
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
};

export default techStack;
