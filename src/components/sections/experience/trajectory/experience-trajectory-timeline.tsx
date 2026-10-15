import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Timeline, type TimelineItem } from '@/components/common/timeline';
import { Badge } from '@/components/ui/badge';
import { useLanguage, type UseLanguageReturn } from '@/hooks/use-language';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { TrajectoryItem } from '@/types/portfolio/trajectory/trajectory-item';
import type { Trajectory } from '@/types/portfolio/trajectory/trajectory';
import { formatDate } from '@/utils/date';

export const ExperienceTrajectoryTimeline = (): ReactElement => {
  const { t } = useTranslation();
  const { language }: UseLanguageReturn = useLanguage();
  const trajectory: Trajectory = usePortfolio('trajectory');

  return (
    <Timeline
      className="md:col-start-1"
      extendLastLine
      items={trajectory.items.map(
        (experience: TrajectoryItem): TimelineItem => {
          const endDate: string = experience.endDate
            ? formatDate(experience.endDate, language)
            : t('experience.present');

          return {
            key: `${experience.name}-${experience.startDate}`,
            startDate: experience.startDate,
            endDate: experience.endDate,
            content: (
              <article>
                <time className="mb-3 block text-[0.9375rem]/[1.45] font-medium tracking-[-0.01em] text-gray-500 dark:text-gray-400">
                  {formatDate(experience.startDate, language)} – {endDate}
                </time>
                <h4 className="text-[clamp(1.5rem,2vw,2rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-[#191919] dark:text-white">
                  {experience.position}
                </h4>
                <p className="mt-1.5 text-[1.0625rem]/[1.45] font-medium tracking-[-0.015em] text-[#404040] dark:text-gray-300">
                  {experience.name}
                </p>
                <p className="mt-4 max-w-xl text-[1.0625rem]/[1.6] font-medium tracking-[-0.01em] text-[#525252] dark:text-gray-300">
                  {experience.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.techStack.map((technology): ReactElement => {
                    const Icon = technology.icon;

                    return (
                      <Badge
                        className="inline-flex items-center gap-2 rounded-full border-0 bg-[#e5e5e5]/80 px-3.5 py-2 text-sm font-semibold text-[#191919] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4d4d4] sm:px-4 sm:py-2.5 sm:text-[0.9375rem] dark:bg-[#2a2a2a]/80 dark:text-white dark:hover:bg-[#404040]"
                        key={technology.name}
                        variant="secondary"
                      >
                        <Icon
                          aria-hidden="true"
                          className="size-4.5 shrink-0 text-[#191919] dark:text-white"
                        />
                        {technology.name}
                      </Badge>
                    );
                  })}
                </div>
              </article>
            ),
          };
        },
      )}
    />
  );
};

export default ExperienceTrajectoryTimeline;
