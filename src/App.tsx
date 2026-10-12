import type { ReactElement } from 'react';
import { Footer } from '@/components/layout/footer';
import { AboutSection } from '@/components/sections/about/about-section';
import { ContactSection } from '@/components/sections/contact/contact-section';
import { HeroSection } from '@/components/sections/hero/hero-section';
import { ProjectsSection } from '@/components/sections/projects/projects-section';

export const App = (): ReactElement => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default App;
