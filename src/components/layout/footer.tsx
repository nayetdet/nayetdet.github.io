import type { ReactElement } from 'react';
import { RiMailLine, RiMapPinLine } from 'react-icons/ri';
import { SocialNetworks } from '@/components/common/social-networks';
import { Separator } from '@/components/ui/separator';
import { sections } from '@/constants/sections';
import { portfolio } from '@/data/portfolio';

const navItems = Object.values(sections).filter(
  (section): boolean =>
    portfolio.projects.length > 0 || section.id !== sections.projects.id,
);

const currentYear: number = new Date().getFullYear();

export const Footer = (): ReactElement => {
  return (
    <footer className="bg-white dark:bg-[#191919]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-6 sm:py-12">
        <div className="mb-6 grid grid-cols-1 gap-6 sm:mb-8 sm:gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-[2rem] font-semibold text-[#191919] sm:mb-4 dark:text-white">
              {portfolio.name.first}
            </h3>
            <p className="text-[#525252] md:pr-5 dark:text-[#a3a3a3]">
              {portfolio.summary}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-2xl font-semibold text-[#191919] sm:mb-4 dark:text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navItems.map(({ label, id, href }): ReactElement => (
                <li key={id}>
                  <a
                    href={href}
                    className="text-sm text-[#404040] transition-colors hover:text-black sm:text-base dark:text-[#d4d4d4] dark:hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-2xl font-semibold text-[#191919] sm:mb-4 dark:text-white">
              Contact &amp; Networks
            </h3>
            <div className="mb-3 sm:mb-4">
              <a
                href={`mailto:${portfolio.contact.email}`}
                className="flex cursor-pointer items-center gap-2 text-sm text-[#404040] transition-colors hover:text-black sm:text-base dark:text-[#d4d4d4] dark:hover:text-white"
              >
                <RiMailLine className="size-4 " aria-hidden="true" />
                {portfolio.contact.email}
              </a>
            </div>
            <div className="mb-3 sm:mb-4">
              <div className="flex items-center gap-2 text-sm text-[#404040] sm:text-base dark:text-[#d4d4d4]">
                <RiMapPinLine className="size-4 " aria-hidden="true" />
                {portfolio.location}
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm text-[#404040] dark:text-[#d4d4d4]">
                Follow me:
              </p>
              <SocialNetworks />
            </div>
          </div>
        </div>

        <Separator className="mb-6 bg-gray-200 dark:bg-[#303030]" />
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:gap-4 md:flex-row md:text-left">
          <p className="text-sm text-[#404040] dark:text-[#d4d4d4]">
            © {currentYear} {portfolio.name.first}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
