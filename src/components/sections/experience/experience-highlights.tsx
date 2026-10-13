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
    <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
      {highlights.map(({ icon: Icon, title, description }) => (
        <article
          key={title}
          className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm sm:p-6 dark:bg-[#1a1a1a]"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-[#191919] dark:bg-[#2a2a2a] dark:text-white">
            <Icon aria-hidden="true" className="size-5" />
          </span>
          <div className="min-w-0">
            <h3 className="text-base font-semibold tracking-tight text-[#191919] dark:text-white">
              {title}
            </h3>
            <p className="mt-1 text-sm/6 text-[#525252] dark:text-gray-300">
              {description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};
