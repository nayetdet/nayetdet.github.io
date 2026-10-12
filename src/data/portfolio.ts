import {
  RiLayoutLine,
  RiServerLine,
  RiSettings3Line,
  RiStackLine,
} from 'react-icons/ri';
import type { Portfolio } from '@/types/portfolio';

export const portfolio: Portfolio = {
  name: { first: 'João Pedro', last: 'Moreira' },
  role: 'Software Engineer',
  image: '/images/profile/joao-pedro-moreira.jpg',
  location: 'Fortaleza, Ceará, Brazil',
  specialties: [
    { name: 'Full Stack', icon: RiStackLine },
    { name: 'Backend', icon: RiServerLine },
    { name: 'Frontend', icon: RiLayoutLine },
    { name: 'DevOps', icon: RiSettings3Line },
  ],
  tagline:
    'I build reliable backend platforms, web products, and data-driven solutions with thoughtful architecture and intuitive interfaces.',
  summary:
    'Software Engineer building backend platforms, web products, and data-driven solutions.',
  biography:
    'Software Engineer with experience building backend platforms, web products, and data-driven solutions. Works from architecture through delivery, automating processes, modernizing legacy systems, and building secure, scalable integrations with Java/Spring Boot, Python/FastAPI, Node.js, and React.',
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
  cv: '/documents/cv.pdf',
  contact: {
    email: 'jpmoreirac21@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jpmoreiracampos',
    github: 'https://github.com/nayetdet',
    gitlab: 'https://gitlab.com/nayetdet',
  },
  projects: [],
};
