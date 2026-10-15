import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { BriefcaseBusiness } from 'lucide-react';
import { RiMailLine } from 'react-icons/ri';
import { SocialNetworks } from '@/components/common/social-networks';
import { Image } from '@/components/common/image';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { About } from '@/types/portfolio/about/about';

export const ContactProfile = (): ReactElement => {
  const { t } = useTranslation();
  const about: About = usePortfolio('about');

  return (
    <div>
      <div className="mb-[clamp(2.5rem,4vw,4rem)]">
        <div className="flex items-center gap-4">
          <div className="relative size-20 shrink-0 overflow-hidden rounded-full shadow-[0_6px_16px_rgb(25_25_25/0.12)] ring-1 ring-[#191919]/15 sm:size-24 dark:shadow-none dark:ring-0">
            <Image
              alt={`${about.identity.firstName} ${about.identity.lastName}`}
              src={about.identity.image}
              buttonClassName="absolute inset-0 size-full cursor-zoom-in"
              className="size-full object-cover object-top transition-transform duration-300 group-hover/image:scale-105 motion-reduce:transition-none"
            />
          </div>
          <div className="flex w-fit flex-col items-start">
            <h3 className="text-[clamp(1.375rem,1.8vw,1.75rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-[#191919] dark:text-white">
              {about.identity.firstName}
            </h3>
            <p className="mt-2.5 inline-flex items-center gap-2 text-base/normal font-medium tracking-[-0.01em] text-gray-600 dark:text-gray-300">
              <BriefcaseBusiness
                className="size-4.5 shrink-0"
                aria-hidden="true"
              />
              {about.identity.role}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <h4 className="mb-5 text-[clamp(1.375rem,1.8vw,1.75rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-[#191919] dark:text-white">
          {t('contact.usefulLinks')}
        </h4>
        <SocialNetworks variant="pill" className="flex-nowrap" />
      </div>
      <a
        href={`mailto:${about.contact.email}`}
        className={cn(
          buttonVariants(),
          'h-auto rounded-full bg-gray-200 px-4 py-2.5 text-[0.9375rem] font-semibold text-gray-700 hover:bg-gray-300 dark:bg-[#222222] dark:text-gray-300 dark:hover:bg-[#2a2a2a]',
        )}
      >
        <RiMailLine className="size-4" aria-hidden="true" />
        <span>{about.contact.email}</span>
      </a>
    </div>
  );
};
