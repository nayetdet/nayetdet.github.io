import type { ReactElement } from 'react';
import { Building2, CalendarDays, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Timeline, type TimelineItem } from '@/components/common/timeline';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { Education } from '@/types/portfolio/about/education';
import { formatDate } from '@/utils/date';

export const EducationTimeline = (): ReactElement => {
  const { t } = useTranslation();
  const entries: Education[] = usePortfolio('about').education;

  return (
    <div className="mb-[clamp(2.5rem,4vw,4rem)]">
      <h5 className="mb-6 text-2xl leading-[1.05] font-semibold tracking-[-0.035em] text-[#191919] sm:text-3xl dark:text-white">
        {t('about.education')}
      </h5>
      <Timeline
        extendLastLine
        items={entries.map((entry): TimelineItem => {
          const endDate = entry.endDate ?? t('experience.present');

          return {
            key: String(entry.startDate),
            startDate: entry.startDate,
            endDate: entry.endDate,
            content: (
              <div>
                <time className="mb-3 grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-2.5 text-[0.9375rem]/[1.45] font-medium tracking-[-0.01em] text-gray-500 dark:text-gray-400">
                  <CalendarDays
                    aria-hidden="true"
                    className="size-4 justify-self-center"
                  />
                  <span>
                    {formatDate(entry.startDate)} –{' '}
                    {entry.endDate ? formatDate(entry.endDate) : endDate}
                  </span>
                </time>
                <h6 className="grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-2.5 text-[clamp(1.25rem,1.6vw,1.5rem)] leading-[1.1] font-semibold tracking-[-0.035em] text-[#191919] dark:text-white">
                  <Building2
                    aria-hidden="true"
                    className="size-4.5 justify-self-center"
                  />
                  <span>{entry.institution}</span>
                </h6>
                <p className="mt-2 grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-2.5 text-base/[1.55] font-medium tracking-[-0.01em] text-[#404040] dark:text-gray-300">
                  <GraduationCap
                    aria-hidden="true"
                    className="size-4.5 justify-self-center"
                  />
                  <span>{entry.degree}</span>
                </p>
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default EducationTimeline;
