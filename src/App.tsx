import { lazy, Suspense, type ReactElement } from 'react';
import { HeroSection } from '@/components/sections/hero/hero-section';
import { useLocale } from '@/hooks/use-locale';

const AboutSection = lazy(
  () => import('@/components/sections/about/about-section'),
);

const ExperienceSection = lazy(
  () => import('@/components/sections/experience/experience-section'),
);

const ProjectsSection = lazy(
  () => import('@/components/sections/projects/projects-section'),
);

const ContactSection = lazy(
  () => import('@/components/sections/contact/contact-section'),
);

const Footer = lazy(() => import('@/components/layout/footer'));

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
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
