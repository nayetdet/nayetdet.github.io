import { Layers3, PanelsTopLeft, Server, Settings2 } from 'lucide-react';
import type { Portfolio } from '@/types/portfolio';

const portfolioPtBR: Portfolio = {
  name: { first: 'João Pedro', last: 'Moreira' },
  role: 'Engenheiro de Software',
  image: '/images/profile/joao-pedro-moreira.jpg',
  location: 'Fortaleza, Ceará, Brasil',
  specialties: [
    { name: 'Full Stack', icon: Layers3 },
    { name: 'Backend', icon: Server },
    { name: 'Frontend', icon: PanelsTopLeft },
    { name: 'DevOps', icon: Settings2 },
  ],
  tagline:
    'Desenvolvo plataformas de backend confiáveis, produtos web e soluções orientadas a dados com arquitetura bem planejada e interfaces intuitivas.',
  summary:
    'Engenheiro de Software que desenvolve plataformas de backend, produtos web e soluções orientadas a dados.',
  biography:
    'Engenheiro de Software com experiência no desenvolvimento de plataformas de backend, produtos web e soluções orientadas a dados. Atua da arquitetura à entrega, automatizando processos, modernizando sistemas legados e construindo integrações seguras e escaláveis com Java/Spring Boot, Python/FastAPI, Node.js e React.',
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
  cv: '/documents/cv.pdf',
  contact: {
    email: 'jpmoreirac21@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jpmoreiracampos',
    github: 'https://github.com/nayetdet',
    gitlab: 'https://gitlab.com/nayetdet',
  },
  projects: [],
};

export default portfolioPtBR;
