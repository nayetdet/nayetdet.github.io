import { commonAbout } from '@/data/portfolio/common/about';
import type { About } from '@/types/portfolio/about/about';

export const about: About = {
  ...commonAbout,
  identity: { ...commonAbout.identity, role: 'Desenvolvedor Full Stack' },
  introduction: {
    tagline:
      'Desenvolvo aplicações web do frontend ao backend, incluindo APIs, integrações e infraestrutura de deploy.',
    summary:
      'Desenvolvedor Full Stack que conecta interfaces, serviços backend e infraestrutura na construção de aplicações web.',
    biography:
      'Sou desenvolvedor Full Stack e construo aplicações web para diferentes contextos. Desenvolvo interfaces, APIs e integrações, além de trabalhar com infraestrutura e automação de deploy. Minha experiência inclui produtos web, sistemas institucionais e plataformas analíticas, com Java/Spring Boot, Python/FastAPI, Node.js e React.',
  },
  cv: '/documents/cv-pt-BR.pdf',
  education: [
    {
      institution:
        'Instituto Federal de Educação, Ciência e Tecnologia do Ceará',
      degree: 'Bacharelado em Ciência da Computação',
      startDate: '2024',
      endDate: '2027',
    },
  ],
};

export default about;
