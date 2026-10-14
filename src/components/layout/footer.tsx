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
    <footer className="bg-white dark:bg-[#191919]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-6 sm:py-12">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#191919] dark:text-white">
              {about.identity.firstName}
            </h3>
            <p className="text-base/7 text-[#525252] md:pr-5 dark:text-[#a3a3a3]">
              {about.introduction.summary}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#191919] dark:text-white">
              {t('footer.navigation')}
            </h3>
            <ul className="space-y-2">
              {Object.values(sections).map(
                ({ id, icon: Icon }): ReactElement => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={(): void => scrollTo(id)}
                      className="inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-sm/6 text-gray-500 transition-colors duration-300 hover:text-[#191919] dark:text-gray-400 dark:hover:text-white"
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
            <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#191919] dark:text-white">
              {t('footer.contactNetworks')}
            </h3>
            <div className="mb-3 sm:mb-4">
              <div className="flex items-center gap-2 text-sm/6 text-[#404040] dark:text-[#d4d4d4]">
                <RiMailLine
                  className="size-4 text-gray-500 dark:text-gray-400"
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
            <div className="mb-3 flex items-center gap-3 sm:mb-4">
              <Globe
                className="size-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
              />
              <p className="text-sm/6 text-[#404040] dark:text-[#d4d4d4]">
                {t('footer.followMe')}
              </p>
              <SocialNetworks iconClassName="text-gray-500 transition-colors duration-300 hover:text-[#191919] dark:text-gray-400 dark:hover:text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm/6 text-[#404040] dark:text-[#d4d4d4]">
                <MapPin
                  className="size-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                />
                {about.contact.location}
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-6 bg-gray-200 dark:bg-[#303030]" />
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:gap-4 md:flex-row md:text-left">
          <p className="text-sm text-[#404040] dark:text-[#d4d4d4]">
            © {currentYear} {about.identity.firstName}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
