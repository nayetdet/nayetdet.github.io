import { lazy, Suspense, type ReactElement } from 'react';
import { HeroSection } from '@/components/sections/hero/hero-section';
import { useLocale } from '@/hooks/use-locale';
import { useScrollSmoother } from '@/hooks/use-scroll-smoother';
import Navbar from '@/components/layout/navbar/navbar';

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
  useScrollSmoother();

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
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
        </div>
      </div>
    </>
  );
};

export default App;
