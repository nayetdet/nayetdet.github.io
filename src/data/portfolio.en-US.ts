import { portfolioCommon } from '@/data/portfolio.common';
import type { Portfolio } from '@/types/portfolio';

const portfolioEnUS: Portfolio = {
  ...portfolioCommon,
  role: 'Software Engineer',
  tagline:
    'I build reliable backend platforms, web products, and data-driven solutions with thoughtful architecture and intuitive interfaces.',
  summary:
    'Software Engineer building backend platforms, web products, and data-driven solutions.',
  biography:
    'Software Engineer with experience building backend platforms, web products, and data-driven solutions. Works from architecture through delivery, automating processes, modernizing legacy systems, and building secure, scalable integrations with Java/Spring Boot, Python/FastAPI, Node.js, and React.',
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
};

export default portfolioEnUS;
