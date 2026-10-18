import { lazy, type ReactElement } from 'react';
import { LazySection } from '@/components/common/lazy-section';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero/hero-section';
import { sections } from '@/constants/sections';
import { useLocale } from '@/hooks/use-locale';

const AboutSection = lazy(() =>
  import('@/components/sections/about/about-section').then(
    ({ AboutSection: component }) => ({ default: component }),
  ),
);

const ExperienceSection = lazy(() =>
  import('@/components/sections/experience/experience-section').then(
    ({ ExperienceSection: component }) => ({ default: component }),
  ),
);

const ProjectsSection = lazy(() =>
  import('@/components/sections/projects/projects-section').then(
    ({ ProjectsSection: component }) => ({ default: component }),
  ),
);

const ContactSection = lazy(() =>
  import('@/components/sections/contact/contact-section').then(
    ({ ContactSection: component }) => ({ default: component }),
  ),
);

export const App = (): ReactElement => {
  useLocale();

  return (
    <>
      <main>
        <HeroSection />
        <LazySection id={sections.about.id} minHeight="900px">
          <AboutSection />
        </LazySection>
        <LazySection id={sections.experience.id} minHeight="1500px">
          <ExperienceSection />
        </LazySection>
        <LazySection id={sections.projects.id} minHeight="1100px">
          <ProjectsSection />
        </LazySection>
        <LazySection id={sections.contact.id} minHeight="900px">
          <ContactSection />
        </LazySection>
      </main>
      <Footer />
    </>
  );
};

export default App;
