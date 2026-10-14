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
  projects: [
    {
      name: 'GameKube',
      description:
        'Plataforma Kubernetes-native de cloud gaming que gerencia jogos em contêineres Docker e inicia sessões sob demanda, com toda a execução ocorrendo no lado do servidor.',
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
        'Balanceador de carga Kubernetes-native construído do zero, com proxy reverso, descoberta de instâncias e algoritmos próprios para distribuir requisições entre servidores.',
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
        'Filtro de áudio para OBS que usa Retrieval-based Voice Conversion (RVC), um algoritmo de IA que transforma a voz em tempo real com modelos pré-treinados para reproduzir vozes de outras pessoas em transmissões ou gravações.',
      images: ['https://opengraph.githubassets.com/1/nayetdet/obs-rvc'],
      techStack: [techStacks.python, techStacks.cplusplus],
      website: 'https://github.com/nayetdet/obs-rvc',
    },
    {
      name: 'Gatekeeper',
      description:
        'Web Scraper que resgata automaticamente os jogos gratuitos da Epic Games Store e os adiciona à sua biblioteca, sem precisar acompanhar a loja toda semana.',
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
        'Gera currículos em PDF a partir de arquivos JSON, prontos para enviar e compatíveis com sistemas ATS.',
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
        'Uma plataforma para leitores que une biblioteca digital e comunidade: organize sua estante, registre o progresso das leituras e acompanhe o que outras pessoas estão lendo.',
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
        'Infraestrutura declarativa para configurar e manter um homelab baseado em Kubernetes.',
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
        'Instituto Federal de Educação, Ciência e Tecnologia do Ceará',
      degree: 'Bacharelado em Ciência da Computação',
      startDate: '2024',
      endDate: '2027',
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
        techStacks.kafka,
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
