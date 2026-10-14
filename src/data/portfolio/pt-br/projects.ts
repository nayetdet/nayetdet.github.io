import { commonProjects } from '@/data/portfolio/common/projects';
import type { Projects } from '@/types/portfolio/projects/projects';

const projectDescriptions = {
  GameKube:
    'Plataforma Kubernetes-native de cloud gaming que gerencia jogos em contêineres Docker e inicia sessões sob demanda, com toda a execução ocorrendo no lado do servidor.',
  'HTTP Load Balancer':
    'Balanceador de carga Kubernetes-native construído do zero, com proxy reverso, descoberta de instâncias e algoritmos próprios para distribuir requisições entre servidores.',
  'OBS RVC':
    'Filtro de áudio para OBS que usa Retrieval-based Voice Conversion (RVC), um algoritmo de IA que transforma a voz em tempo real com modelos pré-treinados para reproduzir vozes de outras pessoas em transmissões ou gravações.',
  Gatekeeper:
    'Web Scraper que resgata automaticamente os jogos gratuitos da Epic Games Store e os adiciona à sua biblioteca, sem precisar acompanhar a loja toda semana.',
  SoftWorker:
    'Gera currículos em PDF a partir de arquivos JSON, prontos para enviar e compatíveis com sistemas ATS.',
  CarekoBooks:
    'Uma plataforma para leitores que une biblioteca digital e comunidade: organize sua estante, registre o progresso das leituras e acompanhe o que outras pessoas estão lendo.',
  Homelab:
    'Infraestrutura declarativa para configurar e manter um homelab baseado em Kubernetes.',
} satisfies Record<(typeof commonProjects)[number]['name'], string>;

export const projects: Projects = {
  items: commonProjects.map((project) => ({
    ...project,
    description:
      projectDescriptions[project.name as keyof typeof projectDescriptions],
  })),
};

export default projects;
