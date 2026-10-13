import {
  Database,
  Layers3,
  PanelsTopLeft,
  Server,
  Settings2,
} from 'lucide-react';
import {
  SiAnsible,
  SiApachekafka,
  SiArgo,
  SiCss,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithubactions,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiKeycloak,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiSass,
  SiSpring,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa6';
import type { Portfolio } from '@/types/portfolio';

export const portfolioCommon = {
  name: { first: 'João Pedro', last: 'Moreira' },
  image: '/images/profile/joao-pedro-moreira.jpg',
  location: 'Fortaleza, Ceará, Brasil',
  specialties: [
    { name: 'Full Stack', icon: Layers3 },
    { name: 'Backend', icon: Server },
    { name: 'Frontend', icon: PanelsTopLeft },
    { name: 'DevOps', icon: Settings2 },
  ],
  techStack: [
    {
      icon: Server,
      category: 'backend',
      items: [
        { name: 'Java', icon: FaJava },
        { name: 'Spring', icon: SiSpring },
        { name: 'Python', icon: SiPython },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'Django', icon: SiDjango },
        { name: 'Flask', icon: SiFlask },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Keycloak', icon: SiKeycloak },
        { name: 'RabbitMQ', icon: SiRabbitmq },
        { name: 'Apache Kafka', icon: SiApachekafka },
      ],
    },
    {
      icon: PanelsTopLeft,
      category: 'frontend',
      items: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'HTML', icon: SiHtml5 },
        { name: 'CSS', icon: SiCss },
        { name: 'Sass', icon: SiSass },
        { name: 'Tailwind', icon: SiTailwindcss },
      ],
    },
    {
      icon: Database,
      category: 'databases',
      items: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MySQL', icon: SiMysql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Redis', icon: SiRedis },
      ],
    },
    {
      icon: Settings2,
      category: 'infrastructure',
      items: [
        { name: 'Docker', icon: SiDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Argo CD', icon: SiArgo },
        { name: 'Nginx', icon: SiNginx },
        { name: 'AWS', icon: FaAws },
        { name: 'Terraform', icon: SiTerraform },
        { name: 'Ansible', icon: SiAnsible },
        { name: 'GitHub Actions', icon: SiGithubactions },
        { name: 'Git', icon: SiGit },
        { name: 'Linux', icon: SiLinux },
        { name: 'Bash', icon: SiGnubash },
      ],
    },
  ],
  contact: {
    email: 'jpmoreirac21@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jpmoreiracampos',
    github: 'https://github.com/nayetdet',
    gitlab: 'https://gitlab.com/nayetdet',
  },
  projects: [],
} satisfies Pick<
  Portfolio,
  | 'name'
  | 'image'
  | 'location'
  | 'specialties'
  | 'techStack'
  | 'contact'
  | 'projects'
>;
