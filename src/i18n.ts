import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'en-US': {
    translation: {
      page: { title: 'Portfolio' },
      brand: { goHome: 'Go to home page' },
      navigation: {
        home: 'Home',
        about: 'About',
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
      about: { title: 'About', education: 'Education', viewCv: 'View my CV' },
      projects: {
        title: 'Projects',
        viewWebsite: 'View website',
        viewProjectWebsite: 'View {{title}} website',
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
      navigation: {
        home: 'Início',
        about: 'Sobre',
        projects: 'Projetos',
        contact: 'Contato',
        title: 'Navegação principal',
        mobileMenu: 'Menu móvel',
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
      theme: { toggle: 'Alternar entre tema claro e escuro' },
      hero: { greeting: 'Olá, eu sou', scrollToAbout: 'Ir para a seção Sobre' },
      about: {
        title: 'Sobre',
        education: 'Formação',
        viewCv: 'Ver meu currículo',
      },
      projects: {
        title: 'Projetos',
        viewWebsite: 'Ver site',
        viewProjectWebsite: 'Ver site de {{title}}',
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
        contactNetworks: 'Contato e redes',
        followMe: 'Acompanhe-me:',
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
