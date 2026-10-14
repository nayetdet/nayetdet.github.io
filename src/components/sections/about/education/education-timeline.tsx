import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Timeline, type TimelineItem } from '@/components/common/timeline';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { Education } from '@/types/education';

export const EducationTimeline = (): ReactElement => {
  const { t } = useTranslation();
  const entries: Education[] = usePortfolio().education;

  return (
    <div className="mb-8">
      <h5 className="mb-6 text-2xl font-bold text-[#191919] sm:text-3xl dark:text-white">
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
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <h6 className="text-lg font-bold text-[#191919] uppercase dark:text-white">
                    {entry.institution}
                  </h6>
                  <p className="text-base font-medium text-[#404040] dark:text-gray-300">
                    {entry.degree}
                  </p>
                </div>
                <span className="shrink-0 text-sm whitespace-nowrap text-gray-600 italic dark:text-gray-400">
                  {entry.startDate} – {endDate}
                </span>
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default EducationTimeline;
