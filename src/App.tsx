import { lazy, Suspense, type ReactElement } from 'react';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero/hero-section';
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
        <Suspense fallback={null}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={null}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={null}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
