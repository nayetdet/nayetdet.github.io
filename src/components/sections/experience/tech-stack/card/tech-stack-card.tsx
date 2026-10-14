import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { TechStackCardItem } from '@/components/sections/experience/tech-stack/card/tech-stack-card-item';
import type { TechStackCategory } from '@/types/portfolio/tech-stack/tech-stack-category';

interface TechStackCardProps {
  stack: TechStackCategory;
}

export const TechStackCard = ({ stack }: TechStackCardProps): ReactElement => {
  const { t } = useTranslation();
  const { category, icon: CategoryIcon, items } = stack;

  return (
    <Card className="rounded-2xl border-0 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8 dark:bg-[#1a1a1a]">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-[#191919] dark:bg-[#2a2a2a] dark:text-white">
          <CategoryIcon className="size-5" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-[#191919] dark:text-white">
          {t(`techStack.${category}`)}
        </h3>
      </div>
      <ul
        className="flex flex-wrap gap-2.5"
        aria-label={t(`techStack.${category}`)}
      >
        {items.map((item): ReactElement => (
          <TechStackCardItem key={item.name} item={item} />
        ))}
      </ul>
    </Card>
  );
};
