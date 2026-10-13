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
        'Desenvolvimento de um PaaS institucional para gerenciar projetos, ambientes e deploys. Atuei na automação do provisionamento de aplicações e bancos de dados e na implementação do controle de acesso por projeto.',
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
        'Desenvolvimento de APIs para uma plataforma que coletava publicações de três redes sociais e previa seu potencial de viralização. Atuei nos serviços de coleta e processamento e na predição da viralidade dos posts.',
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
        'Desenvolvimento de APIs para uma plataforma que previa quando veículos precisavam reabastecer, com base em dados de uso e consumo. Atuei nos serviços de ingestão, processamento e predição.',
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
        'Desenvolvimento do Integra-MEC, plataforma de gestão acadêmica da SETEC/MEC. Implementei a camada de identidade e acesso com Keycloak e a geração de relatórios para os fluxos administrativos.',
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
        'Desenvolvimento de sistemas institucionais usados por servidores e setores do campus, incluindo a Intranet e o SysChaves. Atuei no backend com C#, criando e mantendo APIs e funcionalidades para esses sistemas.',
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
