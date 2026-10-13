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
        'Built an institutional PaaS that centralizes project, environment, and deployment management, integrated with GitHub and Coolify.',
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
        'Built an analytics platform that transforms social media data into intelligence and decision support.',
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
        'Built a data-oriented backend solution composed of ingestion, processing, and prediction microservices.',
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
        "Improved Integra-MEC, SETEC/MEC's administrative system, with a focus on security, business rules, and internal workflows.",
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
        'Improved internal systems in C#/.NET, REST APIs, and a modular monolith architecture.',
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
