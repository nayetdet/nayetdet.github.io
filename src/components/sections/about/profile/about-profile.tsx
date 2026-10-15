import type { ReactElement } from 'react';
import { Image } from '@/components/common/image';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { About } from '@/types/portfolio/about/about';

export const AboutProfile = (): ReactElement => {
  const about: About = usePortfolio('about');

  return (
    <div className="w-full shrink-0 md:w-auto">
      <div className="group relative h-80 w-full overflow-hidden rounded-3xl shadow-[0_12px_30px_rgb(25_25_25/0.1)] ring-1 ring-[#191919]/15 ring-inset sm:mx-auto sm:h-88 sm:w-72 md:mx-0 dark:shadow-none dark:ring-0">
        <Image
          src={about.identity.image}
          alt={`${about.identity.firstName} ${about.identity.lastName}`}
          buttonClassName="absolute inset-0 size-full cursor-zoom-in"
          className="size-full object-cover object-top transition-transform duration-300 group-hover/image:scale-105 motion-reduce:transition-none"
        />
      </div>
    </div>
  );
};
