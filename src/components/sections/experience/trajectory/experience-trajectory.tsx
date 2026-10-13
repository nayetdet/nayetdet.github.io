import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { Portfolio } from '@/types/portfolio';
import type { Trajectory } from '@/types/trajectory';

const formatDate = (date: string, locale: string): string => {
  const [year, month]: [string, string] = date.split('-') as [string, string];

  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
  }).format(new Date(Number(year), Number(month) - 1));
};

export const ExperienceTrajectory = (): ReactElement => {
  const { t, i18n } = useTranslation();
  const { trajectory }: Portfolio = usePortfolio();
  return (
    <div className="mt-24">
      <h3 className="text-2xl font-bold text-[#191919] sm:text-3xl dark:text-white">
        {t('experience.trajectory')}
      </h3>
      <p className="mt-3 mb-8 max-w-2xl text-base/relaxed text-[#404040] dark:text-gray-300">
        {t('experience.trajectoryDescription')}
      </p>
      <div className="w-full space-y-5">
        {trajectory.map((experience: Trajectory): ReactElement => {
          const endDate: string = experience.endDate
            ? formatDate(experience.endDate, i18n.language)
            : t('experience.present');

          return (
            <article
              className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 dark:bg-[#1a1a1a]"
              key={`${experience.name}-${experience.startDate}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                <h4 className="text-xl font-semibold text-[#191919] dark:text-white">
                  {experience.position}
                </h4>
                <time className="shrink-0 pt-1 text-right text-sm text-[#737373] dark:text-gray-400">
                  {formatDate(experience.startDate, i18n.language)} – {endDate}
                </time>
              </div>
              <p className="mt-1 text-sm font-medium text-[#525252] dark:text-gray-400">
                {experience.name}
              </p>
              <p className="mt-2 text-sm/relaxed text-[#525252] dark:text-gray-300">
                {experience.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {experience.techStack.map((technology): ReactElement => {
                  const Icon = technology.icon;

                  return (
                    <Badge
                      className="inline-flex items-center gap-2 rounded-full border-0 bg-[#e5e5e5]/80 px-3 py-1.5 text-xs font-medium text-[#191919] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4d4d4] sm:px-4 sm:py-2 sm:text-sm dark:bg-[#2a2a2a]/80 dark:text-white dark:hover:bg-[#404040]"
                      key={technology.name}
                      variant="secondary"
                    >
                      <Icon
                        aria-hidden="true"
                        className="size-4 shrink-0 text-[#191919] dark:text-white"
                      />
                      {technology.name}
                    </Badge>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTrajectory;
