import { portfolioCommon } from '@/data/portfolio.common';
import { techStacks } from '@/data/tech-stacks';
import type { Portfolio } from '@/types/portfolio';

const portfolioPtBR: Portfolio = {
  ...portfolioCommon,
  role: 'Desenvolvedor Full Stack',
  tagline:
    'Desenvolvo aplicações web do frontend ao backend, incluindo APIs, integrações e infraestrutura de deploy.',
  summary:
    'Desenvolvedor Full Stack que conecta interfaces, serviços backend e infraestrutura na construção de aplicações web.',
  biography:
    'Sou desenvolvedor Full Stack e construo aplicações web para diferentes contextos. Desenvolvo interfaces, APIs e integrações, além de trabalhar com infraestrutura e automação de deploy. Minha experiência inclui produtos web, sistemas institucionais e plataformas analíticas, com Java/Spring Boot, Python/FastAPI, Node.js e React.',
  cv: '/documents/cv-pt-BR.pdf',
  education: [
    {
      institution:
        'Instituto Federal de Educação, Ciência e Tecnologia do Ceará',
      degree: 'Bacharelado em Ciência da Computação',
      startDate: 2024,
      endDate: 2027,
      isOngoing: true,
    },
  ],
  trajectory: [
    {
      name: 'Laboratório de Telemática, Acessibilidade e Projetos Educacionais (LTAP)',
      position: 'Desenvolvedor Full Stack',
      startDate: '2026-05',
      summary:
        'Atuei no desenvolvimento de um PaaS institucional que centraliza a gestão de projetos, ambientes e deploys, integrado ao GitHub e ao Coolify.',
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
      name: 'Núcleo de Visão Computacional e Engenharia (NUVEN)',
      position: 'Desenvolvedor Backend',
      startDate: '2025-07',
      summary:
        'Atuei no desenvolvimento de uma plataforma analítica para transformar dados de redes sociais em inteligência e suporte à decisão.',
      techStack: [
        techStacks.python,
        techStacks.fastApi,
        techStacks.mongodb,
        techStacks.docker,
      ],
    },
    {
      name: 'Movias Soluções',
      position: 'Desenvolvedor Backend',
      startDate: '2025-10',
      endDate: '2026-03',
      summary:
        'Atuei no desenvolvimento de uma solução backend orientada a dados, composta por microsserviços de ingestão, processamento e predição.',
      techStack: [
        techStacks.python,
        techStacks.fastApi,
        techStacks.postgresql,
        techStacks.docker,
      ],
    },
    {
      name: 'Laboratório de Visão Computacional e Inteligência Artificial (LabVICIA)',
      position: 'Desenvolvedor Full Stack',
      startDate: '2025-04',
      endDate: '2025-09',
      summary:
        'Atuei na evolução do Integra-MEC, sistema administrativo da SETEC/MEC, com foco em segurança, regras de negócio e fluxos internos.',
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
      name: 'Núcleo de Desenvolvimento de Software (NDS)',
      position: 'Desenvolvedor Backend',
      startDate: '2024-10',
      endDate: '2025-05',
      summary:
        'Atuei na evolução de sistemas internos em C#/.NET, APIs REST e arquitetura de monólito modular.',
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

export default portfolioPtBR;
