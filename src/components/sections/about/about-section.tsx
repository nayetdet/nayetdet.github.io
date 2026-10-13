import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/common/section-title';
import { usePortfolio } from '@/hooks/use-portfolio';
import { sections } from '@/constants/sections';
import { CvButton } from '@/components/sections/about/actions/cv-button';
import { EducationTimeline } from '@/components/sections/about/education/education-timeline';
import { AboutProfile } from '@/components/sections/about/profile/about-profile';
import { AboutProfileSpecialties } from '@/components/sections/about/profile/about-profile-specialties';
import type { Portfolio } from '@/types/portfolio';

export const AboutSection = (): ReactElement => {
  const { t } = useTranslation();
  const portfolio: Portfolio = usePortfolio();

  return (
    <section
      id={sections.about.id}
      className="bg-gray-50 pt-32 pb-8 dark:bg-[#121212]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <SectionTitle>{t('about.title')}</SectionTitle>
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-stretch md:gap-12">
          <AboutProfile />
          <div className="flex-1">
            <div className="mb-6">
              <h3 className="text-3xl font-medium text-[#191919] sm:text-4xl dark:text-white">
                {portfolio.name.first}
              </h3>
              <h4 className="text-5xl font-bold text-[#191919] sm:text-6xl dark:text-white">
                {portfolio.name.last}
              </h4>
            </div>
            <AboutProfileSpecialties />
            <p className="mb-8 max-w-3xl text-base/relaxed  text-[#404040] sm:text-lg dark:text-gray-300">
              {portfolio.biography}
            </p>
            {portfolio.education.length > 0 && <EducationTimeline />}
            <CvButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
