import { commonAbout } from '@/data/portfolio/common/about';
import type { About } from '@/types/portfolio/about/about';

export const about: About = {
  ...commonAbout,
  contact: { ...commonAbout.contact, location: 'Fortaleza, Ceará, Brazil' },
  identity: { ...commonAbout.identity, role: 'Full Stack Developer' },
  introduction: {
    tagline:
      'I build web applications across the frontend and backend, including APIs, integrations, and deployment infrastructure.',
    summary:
      'Full Stack Developer connecting interfaces, backend services, and infrastructure to build web applications.',
    biography:
      'I am a Full Stack Developer building web applications for different contexts. I develop interfaces, APIs, and integrations, and also work with infrastructure and deployment automation. My experience includes web products, institutional systems, and analytics platforms, using Java/Spring Boot, Python/FastAPI, Node.js, and React.',
  },
  cv: 'https://github.com/nayetdet/resume/releases/download/nightly/resume_en_US.pdf',
  education: [
    {
      institution:
        'Federal Institute of Education, Science and Technology of Ceará (IFCE)',
      degree: "Bachelor's Degree in Computer Science",
      startDate: '2024-03',
      endDate: '2027-12',
    },
  ],
};

export default about;
