import type { ReactElement } from 'react';
import { Footer } from '@/components/layout/footer';
import { AboutSection } from '@/components/sections/about/about-section';
import { ContactSection } from '@/components/sections/contact/contact-section';
import { HeroSection } from '@/components/sections/hero/hero-section';
import { ProjectsSection } from '@/components/sections/projects/projects-section';
import { TechStackSection } from '@/components/sections/tech-stack/tech-stack-section';
import { useLocale } from '@/hooks/use-locale';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { Portfolio } from '@/types/portfolio';

export const App = (): ReactElement => {
  useLocale();
  const portfolio: Portfolio = usePortfolio();

  return (
    <main>
      <HeroSection />
      <AboutSection />
      {portfolio.techStack.length > 0 && <TechStackSection />}
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default App;
