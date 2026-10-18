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
        goToSection: 'Go to {{section}}',
        projects: 'Projects',
        contact: 'Contact',
        title: 'Main navigation',
        mobileMenu: 'Mobile menu',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
      },
      language: {
        label: 'Language',
        select: 'Language',
        portuguese: 'Português',
        english: 'English',
      },
      social: { linkedin: 'LinkedIn', github: 'GitHub', gitlab: 'GitLab' },
      theme: { toggle: 'Theme' },
      hero: { greeting: "Hi, I'm", scrollToAbout: 'About' },
      about: {
        title: 'About',
        education: 'Education',
        downloadCv: 'Download CV',
        viewProjects: 'View projects',
      },
      experience: {
        title: 'Experience',
        description:
          'I build web applications end to end, connecting interfaces, APIs, data, and infrastructure to deliver complete products.',
        highlights: {
          platforms: {
            title: 'Frontend and user experience',
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
        description:
          'A selection of projects I have built, from web applications to experiments and working prototypes.',
        showMore: 'Show more',
        showLess: 'Show less',
        viewProjectWebsite: 'View {{title}} website',
        previousImage: 'Previous',
        nextImage: 'Next',
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
        description:
          'Have a project, idea, or opportunity in mind? Get in touch and let’s talk.',
        usefulLinks: 'Useful links:',
        sendMessage: 'Send me a message',
        emailSubject: 'Portfolio contact from {{name}}',
        name: 'Name',
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
        backToTop: 'Back to top',
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
        goToSection: 'Ir para {{section}}',
        projects: 'Projetos',
        contact: 'Contato',
        title: 'Navegação principal',
        mobileMenu: 'Menu de navegação',
        openMenu: 'Abrir menu',
        closeMenu: 'Fechar menu',
      },
      language: {
        label: 'Idioma',
        select: 'Idioma',
        portuguese: 'Português',
        english: 'English',
      },
      social: { linkedin: 'LinkedIn', github: 'GitHub', gitlab: 'GitLab' },
      theme: { toggle: 'Tema' },
      hero: { greeting: 'Olá, eu sou', scrollToAbout: 'Sobre' },
      about: {
        title: 'Sobre',
        education: 'Formação',
        downloadCv: 'Baixar currículo',
        viewProjects: 'Ver projetos',
      },
      experience: {
        title: 'Experiência',
        description:
          'Atuo no desenvolvimento de produtos digitais de ponta a ponta: do front-end e das APIs à infraestrutura e à publicação.',
        highlights: {
          platforms: {
            title: 'Frontend e experiência do usuário',
            description:
              'Crio interfaces responsivas e acessíveis, alinhadas às necessidades de cada produto.',
          },
          systems: {
            title: 'Backend e integrações',
            description:
              'Conecto sistemas, dados e regras de negócio por meio de APIs e serviços.',
          },
          data: {
            title: 'Infraestrutura e entrega',
            description:
              'Automatizo ambientes e publicações para levar aplicações à produção com confiança.',
          },
        },
        trajectory: 'Trajetória',
        trajectoryDescription:
          'Ao longo de diferentes equipes, trabalhei em sistemas institucionais, aplicações backend e plataformas de dados, conectando arquitetura, integrações e entrega de software.',
        present: 'Atual',
      },
      projects: {
        title: 'Projetos',
        description:
          'Uma seleção de projetos que desenvolvi, de aplicações web a experimentos e protótipos funcionais.',
        showMore: 'Mostrar mais',
        showLess: 'Mostrar menos',
        viewProjectWebsite: 'Ver site de {{title}}',
        previousImage: 'Anterior',
        nextImage: 'Próxima',
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
        description:
          'Tem um projeto, uma ideia ou uma oportunidade em mente? Me chama para conversarmos.',
        usefulLinks: 'Links úteis:',
        sendMessage: 'Envie uma mensagem',
        emailSubject: 'Contato pelo portfólio: {{name}}',
        name: 'Nome',
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
        backToTop: 'Voltar ao início',
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
