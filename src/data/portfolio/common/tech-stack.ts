import {
  Activity,
  CloudUpload,
  Database,
  MessagesSquare,
  PanelsTopLeft,
  Server,
} from 'lucide-react';
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
      icon: MessagesSquare,
      category: 'messaging',
      items: [techStacks.rabbitMq, techStacks.kafka],
    },
    {
      icon: CloudUpload,
      category: 'infrastructure',
      items: [
        techStacks.docker,
        techStacks.dockerSwarm,
        techStacks.kubernetes,
        techStacks.helm,
        techStacks.argocd,
        techStacks.nginx,
        techStacks.aws,
        techStacks.terraform,
        techStacks.ansible,
        techStacks.git,
        techStacks.githubActions,
        techStacks.linux,
        techStacks.bash,
      ],
    },
    {
      icon: Activity,
      category: 'observability',
      items: [
        techStacks.openTelemetry,
        techStacks.prometheus,
        techStacks.grafana,
        techStacks.jaeger,
      ],
    },
  ],
};

export default techStack;
