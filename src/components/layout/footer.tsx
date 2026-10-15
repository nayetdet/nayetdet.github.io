import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, MapPin } from 'lucide-react';
import { RiMailLine } from 'react-icons/ri';
import { SocialNetworks } from '@/components/common/social-networks';
import { Separator } from '@/components/ui/separator';
import { sections } from '@/constants/sections';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { About } from '@/types/portfolio/about/about';
import { scrollTo } from '@/utils/scroll';

const currentYear: number = new Date().getFullYear();

export const Footer = (): ReactElement => {
  const { t } = useTranslation();
  const about: About = usePortfolio('about');

  return (
    <footer className="border-t border-[#191919] bg-white dark:border-t-[#191919] dark:bg-[#191919]">
      <div className="mx-auto max-w-7xl px-6 py-[clamp(2.5rem,5vw,4.5rem)] sm:px-12">
        <div className="mb-[clamp(2rem,4vw,3.5rem)] grid grid-cols-1 gap-[clamp(2rem,4vw,3.5rem)] md:grid-cols-3">
          <div>
            <h3 className="mb-5 text-[clamp(1.5rem,2vw,2rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-[#191919] dark:text-white">
              {about.identity.firstName}
            </h3>
            <p className="max-w-xs text-base/[1.55] font-medium tracking-[-0.01em] text-gray-500 md:pr-5 dark:text-gray-400">
              {about.introduction.summary}
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-[clamp(1.5rem,2vw,2rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-[#191919] dark:text-white">
              {t('footer.navigation')}
            </h3>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-3">
              {Object.values(sections).map(
                ({ id, icon: Icon }): ReactElement => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={(): void => scrollTo(id)}
                      className="inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-base/[1.4] font-medium text-gray-500 transition-colors duration-300 hover:text-[#191919] dark:text-gray-400 dark:hover:text-white"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                      {t(`navigation.${id}`)}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[clamp(1.5rem,2vw,2rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-[#191919] dark:text-white">
              {t('footer.contactNetworks')}
            </h3>
            <div className="mb-3 sm:mb-4">
              <div className="flex items-center gap-2 text-base/6 font-medium text-[#404040] dark:text-[#d4d4d4]">
                <RiMailLine
                  className="size-3.5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                />
                <span>{t('contact.email')}:</span>
                <a
                  href={`mailto:${about.contact.email}`}
                  className="text-gray-500 transition-colors duration-300 hover:text-[#191919] dark:text-gray-400 dark:hover:text-white"
                >
                  {about.contact.email}
                </a>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <Globe
                className="size-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
              />
              <p className="text-base/6 font-medium text-[#404040] dark:text-[#d4d4d4]">
                {t('footer.followMe')}
              </p>
              <SocialNetworks iconClassName="text-gray-500 transition-colors duration-300 hover:text-[#191919] dark:text-gray-400 dark:hover:text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-base/6 font-medium text-[#404040] dark:text-[#d4d4d4]">
                <MapPin
                  className="size-3.5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                />
                {about.contact.location}
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-6 bg-gray-200 dark:bg-[#303030]" />
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:gap-4 md:flex-row md:text-left">
          <p className="text-[0.9375rem]/[1.55] font-medium tracking-[-0.01em] text-[#404040] dark:text-[#d4d4d4]">
            © {currentYear} {about.identity.firstName}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
