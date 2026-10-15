import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { RiServerLine, RiUploadCloudLine, RiWindowLine } from 'react-icons/ri';

export const ExperienceHighlights = (): ReactElement => {
  const { t } = useTranslation();
  const highlights = [
    {
      icon: RiWindowLine,
      title: t('experience.highlights.platforms.title'),
      description: t('experience.highlights.platforms.description'),
    },
    {
      icon: RiServerLine,
      title: t('experience.highlights.systems.title'),
      description: t('experience.highlights.systems.description'),
    },
    {
      icon: RiUploadCloudLine,
      title: t('experience.highlights.data.title'),
      description: t('experience.highlights.data.description'),
    },
  ];

  return (
    <div className="grid gap-[clamp(1.25rem,2vw,1.75rem)] sm:grid-cols-3 md:grid-cols-1">
      {highlights.map(({ icon: Icon, title, description }) => (
        <article
          key={title}
          className="flex items-start gap-4 rounded-2xl border-0 bg-white p-[clamp(1.5rem,2.5vw,2rem)] shadow-[0_10px_30px_rgb(25_25_25/0.08)] ring-1 ring-[#191919]/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgb(25_25_25/0.12)] motion-reduce:transform-none motion-reduce:transition-none dark:bg-[#1a1a1a] dark:shadow-none dark:ring-0"
        >
          <Icon
            aria-hidden="true"
            className="mt-0.5 size-7 shrink-0 text-[#191919] dark:text-white"
          />
          <div className="min-w-0">
            <h3 className="text-[clamp(1.375rem,1.8vw,1.75rem)] leading-[1.1] font-semibold tracking-[-0.035em] text-[#191919] dark:text-white">
              {title}
            </h3>
            <p className="mt-3.5 text-[1.0625rem]/[1.6] font-medium tracking-[-0.01em] text-[#525252] dark:text-gray-300">
              {description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};
