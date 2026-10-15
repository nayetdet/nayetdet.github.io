import type { ReactElement } from 'react';
import { BriefcaseBusiness, Building2, CalendarDays } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Timeline, type TimelineItem } from '@/components/common/timeline';
import { Badge } from '@/components/ui/badge';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { Trajectory } from '@/types/portfolio/trajectory/trajectory';
import type { TrajectoryItem } from '@/types/portfolio/trajectory/trajectory-item';
import { formatDate } from '@/utils/date';

export const ExperienceTrajectoryTimeline = (): ReactElement => {
  const { t } = useTranslation();
  const trajectory: Trajectory = usePortfolio('trajectory');

  return (
    <Timeline
      className="md:col-start-1"
      extendLastLine
      items={trajectory.items.map(
        (experience: TrajectoryItem): TimelineItem => {
          const endDate: string = experience.endDate
            ? formatDate(experience.endDate)
            : t('experience.present');

          return {
            key: `${experience.name}-${experience.startDate}`,
            startDate: experience.startDate,
            endDate: experience.endDate,
            content: (
              <article>
                <time className="mb-3.5 grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-3 text-base/[1.45] font-medium tracking-[-0.01em] text-gray-500 dark:text-gray-400">
                  <CalendarDays
                    aria-hidden="true"
                    className="size-4.5 justify-self-center"
                  />
                  <span>
                    {formatDate(experience.startDate)} – {endDate}
                  </span>
                </time>
                <h4 className="grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-3 text-[clamp(1.625rem,2.2vw,2.125rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-[#191919] dark:text-white">
                  <BriefcaseBusiness
                    aria-hidden="true"
                    className="size-5 justify-self-center"
                  />
                  <span>{experience.position}</span>
                </h4>
                <p className="mt-2.5 grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-3 text-[1.0625rem]/[1.55] font-medium tracking-[-0.01em] text-[#404040] dark:text-gray-300">
                  <Building2
                    aria-hidden="true"
                    className="size-4.5 justify-self-center"
                  />
                  <span className="min-w-0">{experience.name}</span>
                </p>
                <p className="mt-5 max-w-xl text-[1.0625rem]/[1.65] font-medium tracking-[-0.01em] text-gray-500 dark:text-gray-400">
                  {experience.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {experience.techStack.map((technology): ReactElement => {
                    const Icon = technology.icon;

                    return (
                      <Badge
                        className="inline-flex items-center gap-2 rounded-full border-0 bg-[#e5e5e5]/80 px-4 py-2.5 text-[0.9375rem] font-semibold text-[#191919] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4d4d4] dark:bg-[#2a2a2a]/80 dark:text-white dark:hover:bg-[#404040]"
                        key={technology.name}
                        variant="secondary"
                      >
                        <Icon
                          aria-hidden="true"
                          className="size-5 shrink-0 text-[#191919] dark:text-white"
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
