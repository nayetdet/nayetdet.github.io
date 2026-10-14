import type { ReactElement } from 'react';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { About } from '@/types/portfolio/about/about';

export const AboutProfile = (): ReactElement => {
  const about: About = usePortfolio('about');

  return (
    <div className="w-full shrink-0 md:w-auto">
      <div className="group relative h-80 w-full overflow-hidden rounded-3xl sm:mx-auto sm:h-88 sm:w-72 md:mx-0">
        <img
          src={about.identity.image}
          alt={`${about.identity.firstName} ${about.identity.lastName}`}
          decoding="async"
          loading="lazy"
          className="absolute inset-0 size-full object-cover object-top"
        />
      </div>
    </div>
  );
};
