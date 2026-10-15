import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'en-US': {
    translation: {
      page: { title: 'Portfolio' },
      brand: { goHome: 'Go to home page' },
      image: { expand: 'Expand image: {{alt}}' },
      navigation: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        contact: 'Contact',
        title: 'Main navigation',
        mobileMenu: 'Mobile menu',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
      },
      language: {
        label: 'Language',
        select: 'Select language',
        portuguese: 'Português',
        english: 'English',
      },
      social: {
        linkedin: 'LinkedIn profile',
        github: 'GitHub profile',
        gitlab: 'GitLab profile',
      },
      theme: { toggle: 'Toggle between light and dark theme' },
      hero: { greeting: "Hi, I'm", scrollToAbout: 'Scroll to about' },
      about: {
        title: 'About',
        education: 'Education',
        viewCv: 'View CV',
        viewProjects: 'View projects',
      },
      experience: {
        title: 'Experience',
        description:
          'I build web applications end to end, connecting interfaces, APIs, data, and infrastructure to deliver complete products.',
        highlights: {
          platforms: {
            title: 'Web interfaces',
            description:
              'I build functional, responsive experiences around product needs.',
          },
          systems: {
            title: 'Backend and integrations',
            description:
              'I develop APIs and services that connect business rules, data, and applications.',
          },
          data: {
            title: 'Infrastructure and deployment',
            description:
              'I structure environments and automate delivery to bring products to production.',
          },
        },
        trajectory: 'Career journey',
        trajectoryDescription:
          'Across teams, I have worked on institutional systems, backend applications, and data platforms, connecting architecture, integrations, and software delivery.',
        present: 'Present',
      },
      projects: {
        title: 'Projects',
        showMore: 'Show more',
        showLess: 'Show less',
        viewProjectWebsite: 'View {{title}} website',
        previousImage: 'Previous image',
        nextImage: 'Next image',
      },
      techStack: {
        title: 'Tech Stack',
        description:
          'Tools I have used across different projects, organized by area and applied to a range of development needs.',
        backend: 'Backend',
        frontend: 'Frontend',
        databases: 'Databases',
        infrastructure: 'Infrastructure and DevOps',
      },
      contact: {
        title: 'Contact',
        usefulLinks: 'Useful links:',
        sendMessage: 'Send me a message',
        lastName: 'Last Name',
        firstName: 'First Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
      },
      footer: {
        navigation: 'Navigation',
        contactNetworks: 'Contact & Networks',
        followMe: 'Follow me:',
        rights: 'All rights reserved.',
      },
    },
  },
  'pt-BR': {
    translation: {
      page: { title: 'Portfólio' },
      brand: { goHome: 'Ir para a página inicial' },
      image: { expand: 'Expandir imagem: {{alt}}' },
      navigation: {
        home: 'Início',
        about: 'Sobre',
        experience: 'Experiência',
        projects: 'Projetos',
        contact: 'Contato',
        title: 'Navegação principal',
        mobileMenu: 'Menu de navegação',
        openMenu: 'Abrir menu',
        closeMenu: 'Fechar menu',
      },
      language: {
        label: 'Idioma',
        select: 'Selecionar idioma',
        portuguese: 'Português',
        english: 'English',
      },
      social: {
        linkedin: 'Perfil do LinkedIn',
        github: 'Perfil do GitHub',
        gitlab: 'Perfil do GitLab',
      },
      theme: { toggle: 'Alternar entre os temas claro e escuro' },
      hero: { greeting: 'Olá, eu sou', scrollToAbout: 'Ir para a seção Sobre' },
      about: {
        title: 'Sobre',
        education: 'Formação',
        viewCv: 'Ver currículo',
        viewProjects: 'Ver projetos',
      },
      experience: {
        title: 'Experiência',
        description:
          'Desenvolvo aplicações web de ponta a ponta, conectando interfaces, APIs, dados e infraestrutura para entregar produtos completos.',
        highlights: {
          platforms: {
            title: 'Interfaces web',
            description:
              'Construo experiências funcionais e responsivas, conectadas às necessidades do produto.',
          },
          systems: {
            title: 'Backend e integrações',
            description:
              'Desenvolvo APIs e serviços que conectam regras de negócio, dados e aplicações.',
          },
          data: {
            title: 'Infraestrutura e deploy',
            description:
              'Estruturo ambientes e automatizo entregas para levar os produtos à produção.',
          },
        },
        trajectory: 'Trajetória',
        trajectoryDescription:
          'Ao longo de diferentes equipes, trabalhei em sistemas institucionais, aplicações backend e plataformas de dados, conectando arquitetura, integrações e entrega de software.',
        present: 'Atual',
      },
      projects: {
        title: 'Projetos',
        showMore: 'Mostrar mais',
        showLess: 'Mostrar menos',
        viewProjectWebsite: 'Ver site de {{title}}',
        previousImage: 'Imagem anterior',
        nextImage: 'Próxima imagem',
      },
      techStack: {
        title: 'Tecnologias',
        description:
          'Ferramentas que já fizeram parte dos projetos em que trabalhei, organizadas por área e aplicadas a diferentes necessidades de desenvolvimento.',
        backend: 'Backend',
        frontend: 'Frontend',
        databases: 'Bancos de dados',
        infrastructure: 'Infraestrutura e DevOps',
      },
      contact: {
        title: 'Contato',
        usefulLinks: 'Links úteis:',
        sendMessage: 'Envie uma mensagem',
        lastName: 'Sobrenome',
        firstName: 'Nome',
        email: 'E-mail',
        message: 'Mensagem',
        send: 'Enviar',
      },
      footer: {
        navigation: 'Navegação',
        contactNetworks: 'Contato',
        followMe: 'Redes sociais:',
        rights: 'Todos os direitos reservados.',
      },
    },
  },
} as const;

void i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en-US',
    fallbackLng: 'en-US',
    supportedLngs: ['pt-BR', 'en-US'],
    interpolation: { escapeValue: false },
    initAsync: false,
  });

export default i18n;
