import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Timeline, type TimelineItem } from '@/components/common/timeline';
import { usePortfolio } from '@/hooks/use-portfolio';
import type { Education } from '@/types/portfolio/about/education';

export const EducationTimeline = (): ReactElement => {
  const { t } = useTranslation();
  const entries: Education[] = usePortfolio('about').education;

  return (
    <div className="mb-[clamp(2.5rem,4vw,4rem)]">
      <h5 className="mb-[clamp(1.5rem,2.5vw,2.25rem)] text-[clamp(1.375rem,1.8vw,1.75rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-[#191919] dark:text-white">
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
                <span className="mb-3 block text-[0.9375rem]/[1.45] font-medium tracking-[-0.01em] text-gray-500 dark:text-gray-400">
                  {entry.startDate} – {endDate}
                </span>
                <h6 className="text-[clamp(1.25rem,1.6vw,1.5rem)] leading-[1.1] font-semibold tracking-[-0.035em] text-[#191919] dark:text-white">
                  {entry.institution}
                </h6>
                <p className="mt-1.5 text-base/[1.55] font-medium tracking-[-0.01em] text-[#404040] dark:text-gray-300">
                  {entry.degree}
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
