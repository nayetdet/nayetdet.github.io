import { commonProjects } from '@/data/portfolio/common/projects';
import type { Projects } from '@/types/portfolio/projects/projects';

const projectDescriptions = {
  GameKube:
    'A Kubernetes-native cloud gaming platform that manages Dockerized games and launches sessions on demand, with all processing taking place on the server side.',
  'HTTP Load Balancer':
    'A Kubernetes-native load balancer built from scratch, with a reverse proxy, instance discovery, and custom algorithms for routing requests across servers.',
  'OBS RVC':
    'An OBS audio filter powered by Retrieval-based Voice Conversion (RVC), an AI algorithm that transforms voice in real time with pretrained models to reproduce other people’s voices during streams or recordings.',
  Gatekeeper:
    'A scraper that automatically claims free Epic Games Store titles and adds them to your library, so you do not have to check the store every week.',
  SoftWorker:
    'Generates ATS-friendly PDF resumes from JSON files, ready to share with recruiters.',
  CarekoBooks:
    'A platform for readers that brings a digital bookshelf and community together: organize your books, track your reading progress, and see what others are reading.',
  Homelab:
    'Declarative infrastructure for configuring and maintaining a Kubernetes-based homelab.',
} satisfies Record<(typeof commonProjects)[number]['name'], string>;

export const projects: Projects = {
  items: commonProjects.map((project) => ({
    ...project,
    description:
      projectDescriptions[project.name as keyof typeof projectDescriptions],
  })),
};

export default projects;
