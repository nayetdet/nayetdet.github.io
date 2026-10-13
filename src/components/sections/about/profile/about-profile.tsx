import type { ReactElement } from 'react';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { Portfolio } from '@/types/portfolio';

export const AboutProfile = (): ReactElement => {
  const portfolio: Portfolio = usePortfolio();

  return (
    <div className="w-full shrink-0 md:w-auto">
      <div className="group relative h-80 w-full overflow-hidden rounded-3xl sm:mx-auto sm:h-88 sm:w-72 md:mx-0">
        <img
          src={portfolio.aboutImage}
          alt={`${portfolio.name.first} ${portfolio.name.last}`}
          className="absolute inset-0 size-full object-cover object-top"
        />
      </div>
    </div>
  );
};
