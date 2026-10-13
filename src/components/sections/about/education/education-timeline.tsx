import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
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
      <div className="relative space-y-6">
        <div
          className="absolute bottom-0 left-1.75 w-0.5 bg-[#191919] dark:bg-white"
          style={{ height: 'calc(100% - 2rem)' }}
        />
        <div className="absolute top-0 left-1.75 h-8 w-0.5 bg-white" />
        {entries.map((entry): ReactElement => (
          <div className="relative pl-8" key={entry.startDate}>
            {entry.isOngoing ? (
              <div className="absolute top-2 left-0 z-10 size-4 rounded-full border-[3px] border-white! bg-gray-300 dark:bg-[#404040]" />
            ) : (
              <div className="absolute top-2 left-0 size-4 rounded-full bg-[#191919] dark:bg-white" />
            )}
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
                {entry.startDate} – {entry.endDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
