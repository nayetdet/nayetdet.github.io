import experienceImage from '@/assets/experience/cover.jpg';
import { techStacks } from '@/constants/tech-stacks';
import type { Trajectory } from '@/types/portfolio/trajectory/trajectory';

const items: Trajectory['items'] = [
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
      techStacks.kafka,
      techStacks.docker,
    ],
  },
  {
    name: 'IEPRO – Instituto de Estudos, Pesquisas e Projetos da UECE',
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
];

export const trajectory: Trajectory = { image: experienceImage, items };

export default trajectory;
