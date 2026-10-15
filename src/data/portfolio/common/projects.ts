import carekoBooks01 from '@/assets/projects/carekobooks/demo-01.jpg';
import carekoBooks02 from '@/assets/projects/carekobooks/demo-02.jpg';
import gameKube01 from '@/assets/projects/gamekube/demo-01.jpg';
import gameKube02 from '@/assets/projects/gamekube/demo-02.jpg';
import gameKube03 from '@/assets/projects/gamekube/demo-03.jpg';
import gatekeeper01 from '@/assets/projects/gatekeeper/demo-01.jpg';
import gatekeeper02 from '@/assets/projects/gatekeeper/demo-02.jpg';
import homeLab01 from '@/assets/projects/homelab/demo-01.jpg';
import homeLab02 from '@/assets/projects/homelab/demo-02.jpg';
import homeLab03 from '@/assets/projects/homelab/demo-03.jpg';
import httpLoadBalancer01 from '@/assets/projects/http-load-balancer/demo-01.jpg';
import httpLoadBalancer02 from '@/assets/projects/http-load-balancer/demo-02.jpg';
import obsRvc01 from '@/assets/projects/obs-rvc/demo-01.jpg';
import obsRvc02 from '@/assets/projects/obs-rvc/demo-02.jpg';
import softWorker01 from '@/assets/projects/softworker/demo-01.jpg';
import softWorker02 from '@/assets/projects/softworker/demo-02.jpg';
import { techStacks } from '@/constants/tech-stacks';
import type { Project } from '@/types/portfolio/projects/project';

export const commonProjects = [
  {
    name: 'GameKube',
    images: [gameKube01, gameKube02, gameKube03],
    techStack: [
      techStacks.java,
      techStacks.springBoot,
      techStacks.typescript,
      techStacks.react,
      techStacks.nextJs,
      techStacks.keycloak,
      techStacks.postgresql,
      techStacks.redis,
      techStacks.docker,
      techStacks.kubernetes,
      techStacks.helm,
      techStacks.argocd,
    ],
    website: 'https://github.com/nayetdet/gamekube',
  },
  {
    name: 'CarekoBooks',
    images: [carekoBooks01, carekoBooks02],
    techStack: [
      techStacks.java,
      techStacks.springBoot,
      techStacks.python,
      techStacks.typescript,
      techStacks.react,
      techStacks.nextJs,
      techStacks.keycloak,
      techStacks.postgresql,
      techStacks.redis,
      techStacks.docker,
    ],
    website: 'https://github.com/carekocorps/carekobooks-backend',
  },
  {
    name: 'SoftWorker',
    images: [softWorker01, softWorker02],
    techStack: [
      techStacks.python,
      techStacks.typescript,
      techStacks.react,
      techStacks.nextJs,
      techStacks.docker,
    ],
    website: 'https://github.com/nayetdet/softworker',
  },
  {
    name: 'Homelab',
    images: [homeLab01, homeLab02, homeLab03],
    techStack: [
      techStacks.docker,
      techStacks.kubernetes,
      techStacks.helm,
      techStacks.argocd,
      techStacks.terraform,
      techStacks.ansible,
    ],
    website: 'https://github.com/nayetdet/homelab',
  },
  {
    name: 'OBS RVC',
    images: [obsRvc01, obsRvc02],
    techStack: [techStacks.python, techStacks.cplusplus],
    website: 'https://github.com/nayetdet/obs-rvc',
  },
  {
    name: 'Gatekeeper',
    images: [gatekeeper01, gatekeeper02],
    techStack: [
      techStacks.python,
      techStacks.sqlite,
      techStacks.docker,
      techStacks.kubernetes,
      techStacks.helm,
      techStacks.argocd,
    ],
    website: 'https://github.com/nayetdet/gatekeeper',
  },
  {
    name: 'HTTP Load Balancer',
    images: [httpLoadBalancer01, httpLoadBalancer02],
    techStack: [
      techStacks.python,
      techStacks.flask,
      techStacks.docker,
      techStacks.kubernetes,
    ],
    website: 'https://github.com/nayetdet/http-load-balancer',
  },
] satisfies Omit<Project, 'description'>[];
