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
    <Card className="rounded-2xl border border-[#191919] bg-white p-[clamp(1.5rem,2.5vw,2.25rem)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:border-0 dark:bg-[#1a1a1a]">
      <div className="mb-[clamp(1.5rem,2.5vw,2rem)] flex items-center gap-3.5">
        <CategoryIcon
          className="size-7 shrink-0 text-[#191919] dark:text-white"
          aria-hidden="true"
        />
        <h3 className="text-[clamp(1.375rem,1.8vw,1.75rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-[#191919] dark:text-white">
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
