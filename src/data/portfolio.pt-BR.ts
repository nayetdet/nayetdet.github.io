import { portfolioCommon } from '@/data/portfolio.common';
import type { Portfolio } from '@/types/portfolio';

const portfolioPtBR: Portfolio = {
  ...portfolioCommon,
  role: 'Engenheiro de Software',
  tagline:
    'Desenvolvo plataformas de backend confiáveis, produtos web e soluções orientadas a dados com arquitetura bem planejada e interfaces intuitivas.',
  summary:
    'Engenheiro de Software que desenvolve plataformas de backend, produtos web e soluções orientadas a dados.',
  biography:
    'Engenheiro de Software com experiência no desenvolvimento de plataformas de backend, produtos web e soluções orientadas a dados. Atua da arquitetura à entrega, automatizando processos, modernizando sistemas legados e construindo integrações seguras e escaláveis com Java/Spring Boot, Python/FastAPI, Node.js e React.',
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
};

export default portfolioPtBR;
