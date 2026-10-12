export interface Section {
  id: string;
  label: string;
  href: string;
}

export const sections = {
  home: { id: 'home', label: 'Home', href: '#home' },
  about: { id: 'about', label: 'About', href: '#about' },
  projects: { id: 'projects', label: 'Projects', href: '#projects' },
  contact: { id: 'contact', label: 'Contact', href: '#contact' },
} as const satisfies Record<string, Section>;
