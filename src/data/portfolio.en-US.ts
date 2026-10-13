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
