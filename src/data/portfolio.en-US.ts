import { portfolioCommon } from '@/data/portfolio.common';
import { techStacks } from '@/data/tech-stacks';
import type { Portfolio } from '@/types/portfolio';

const portfolioEnUS: Portfolio = {
  ...portfolioCommon,
  role: 'Full Stack Developer',
  tagline:
    'I build web applications across the frontend and backend, including APIs, integrations, and deployment infrastructure.',
  summary:
    'Full Stack Developer connecting interfaces, backend services, and infrastructure to build web applications.',
  biography:
    'I am a Full Stack Developer building web applications for different contexts. I develop interfaces, APIs, and integrations, and also work with infrastructure and deployment automation. My experience includes web products, institutional systems, and analytics platforms, using Java/Spring Boot, Python/FastAPI, Node.js, and React.',
  cv: '/documents/cv-en-US.pdf',
  projects: [
    {
      name: 'GameKube',
      description:
        'A Kubernetes-native cloud gaming platform that manages Dockerized games and launches sessions on demand, with all processing taking place on the server side.',
      images: ['https://opengraph.githubassets.com/1/nayetdet/gamekube'],
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
      name: 'HTTP Load Balancer',
      description:
        'A Kubernetes-native load balancer built from scratch, with a reverse proxy, instance discovery, and custom algorithms for routing requests across servers.',
      images: [
        'https://opengraph.githubassets.com/1/nayetdet/http-load-balancer',
      ],
      techStack: [
        techStacks.python,
        techStacks.flask,
        techStacks.docker,
        techStacks.kubernetes,
      ],
      website: 'https://github.com/nayetdet/http-load-balancer',
    },
    {
      name: 'OBS RVC',
      description:
        'An OBS audio filter powered by Retrieval-based Voice Conversion (RVC), an AI algorithm that transforms voice in real time with pretrained models to reproduce other people’s voices during streams or recordings.',
      images: ['https://opengraph.githubassets.com/1/nayetdet/obs-rvc'],
      techStack: [techStacks.python, techStacks.cplusplus],
      website: 'https://github.com/nayetdet/obs-rvc',
    },
    {
      name: 'Gatekeeper',
      description:
        'A scraper that automatically claims free Epic Games Store titles and adds them to your library, so you do not have to check the store every week.',
      images: ['https://opengraph.githubassets.com/1/nayetdet/gatekeeper'],
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
      name: 'SoftWorker',
      description:
        'Generates ATS-friendly PDF resumes from JSON files, ready to share with recruiters.',
      images: ['https://opengraph.githubassets.com/1/nayetdet/softworker'],
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
      name: 'CarekoBooks',
      description:
        'A platform for readers that brings a digital bookshelf and community together: organize your books, track your reading progress, and see what others are reading.',
      images: [
        'https://opengraph.githubassets.com/1/carekocorps/carekobooks-backend',
      ],
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
      name: 'Homelab',
      description:
        'Declarative infrastructure for configuring and maintaining a Kubernetes-based homelab.',
      images: ['https://opengraph.githubassets.com/1/nayetdet/homelab'],
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
  ],
  education: [
    {
      institution:
        'Federal Institute of Education, Science and Technology of Ceará',
      degree: "Bachelor's Degree in Computer Science",
      startDate: 2024,
      endDate: 2027,
      isOngoing: true,
    },
  ],
  trajectory: [
    {
      name: 'Laboratory of Telematics, Accessibility and Educational Projects (LTAP)',
      position: 'Full Stack Developer',
      startDate: '2026-05',
      summary:
        'Developed an institutional PaaS for managing projects, environments, and deployments. I automated application and database provisioning and implemented project-level access control.',
      techStack: [
        techStacks.typescript,
        techStacks.elysia,
        techStacks.react,
        techStacks.keycloak,
        techStacks.postgresql,
        techStacks.redis,
        techStacks.docker,
      ],
    },
    {
      name: 'Computer Vision and Engineering Center (NUVEN)',
      position: 'Backend Developer',
      startDate: '2025-07',
      summary:
        'Developed APIs for a platform that collected posts from three social networks and predicted their potential to go viral. I worked on the collection and processing services and on predicting post virality.',
      techStack: [
        techStacks.python,
        techStacks.fastApi,
        techStacks.mongodb,
        techStacks.kafka,
        techStacks.docker,
      ],
    },
    {
      name: 'Movias Soluções',
      position: 'Backend Developer',
      startDate: '2025-10',
      endDate: '2026-03',
      summary:
        'Developed APIs for a platform that predicted when vehicles needed refueling based on usage and fuel consumption data. I worked on the ingestion, processing, and prediction services.',
      techStack: [
        techStacks.python,
        techStacks.fastApi,
        techStacks.postgresql,
        techStacks.docker,
      ],
    },
    {
      name: 'Laboratório de Visão Computacional e Inteligência Artificial (LabVICIA)',
      position: 'Full Stack Developer',
      startDate: '2025-04',
      endDate: '2025-09',
      summary:
        'Developed Integra-MEC, SETEC/MEC’s academic management platform. I implemented its identity and access layer with Keycloak and report generation for administrative workflows.',
      techStack: [
        techStacks.java,
        techStacks.springBoot,
        techStacks.typescript,
        techStacks.angular,
        techStacks.keycloak,
        techStacks.postgresql,
        techStacks.docker,
      ],
    },
    {
      name: 'Software Development Center (NDS)',
      position: 'Backend Developer',
      startDate: '2024-10',
      endDate: '2025-05',
      summary:
        'Developed institutional systems used by campus staff and departments, including Intranet and SysChaves. I worked on the backend in C#, building and maintaining APIs and features for these systems.',
      techStack: [
        techStacks.csharp,
        techStacks.dotnetCore,
        techStacks.mysql,
        techStacks.redis,
        techStacks.docker,
      ],
    },
  ],
};

export default portfolioEnUS;
