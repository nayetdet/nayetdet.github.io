import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Timeline, type TimelineItem } from '@/components/common/timeline';
import { Badge } from '@/components/ui/badge';
import { useLanguage, type UseLanguageReturn } from '@/hooks/use-language';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { Portfolio } from '@/types/portfolio';
import type { Trajectory } from '@/types/trajectory';
import { formatDate } from '@/utils/date';

export const ExperienceTrajectoryTimeline = (): ReactElement => {
  const { t } = useTranslation();
  const { language }: UseLanguageReturn = useLanguage();
  const { trajectory }: Portfolio = usePortfolio();

  return (
    <Timeline
      className="md:col-start-2"
      extendLastLine
      itemClassName="pb-6"
      connectionClassName="-bottom-8"
      leadingLineClassName="top-0 left-1.75 h-8 w-0.5 bg-white"
      items={trajectory.map((experience: Trajectory): TimelineItem => {
        const endDate: string = experience.endDate
          ? formatDate(experience.endDate, language)
          : t('experience.present');

        return {
          key: `${experience.name}-${experience.startDate}`,
          isOngoing: !experience.endDate,
          content: (
            <article>
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                <h4 className="text-lg font-bold text-[#191919] uppercase dark:text-white">
                  {experience.position}
                </h4>
                <time className="shrink-0 text-sm whitespace-nowrap text-gray-600 italic dark:text-gray-400">
                  {formatDate(experience.startDate, language)} – {endDate}
                </time>
              </div>
              <p className="text-base font-medium text-[#404040] dark:text-gray-300">
                {experience.name}
              </p>
              <p className="mt-2 text-base/relaxed text-[#525252] dark:text-gray-300">
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
          ),
        };
      })}
    />
  );
};

export default ExperienceTrajectoryTimeline;
