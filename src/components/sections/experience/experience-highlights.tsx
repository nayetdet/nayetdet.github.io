import { useRef, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CloudUpload,
  PanelsTopLeft,
  Server,
  type LucideIcon,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ExperienceHighlights = (): ReactElement => {
  const { t } = useTranslation();
  const highlightsRef = useRef<HTMLDivElement>(null);
  useScrollReveal(highlightsRef, '[data-highlight]');
  const highlights: Highlight[] = [
    {
      icon: Server,
      title: t('experience.highlights.systems.title'),
      description: t('experience.highlights.systems.description'),
    },
    {
      icon: PanelsTopLeft,
      title: t('experience.highlights.platforms.title'),
      description: t('experience.highlights.platforms.description'),
    },
    {
      icon: CloudUpload,
      title: t('experience.highlights.data.title'),
      description: t('experience.highlights.data.description'),
    },
  ];

  return (
    <div
      ref={highlightsRef}
      className="grid gap-[clamp(1.5rem,2.5vw,2rem)] sm:grid-cols-3 md:grid-cols-1"
    >
      {highlights.map(({ icon: Icon, title, description }) => (
        <article
          data-highlight
          key={title}
          className="group flex items-start gap-4 rounded-2xl border-0 bg-white p-[clamp(1.5rem,2.5vw,2rem)] shadow-[0_10px_30px_rgb(25_25_25/0.08)] ring-1 ring-[#191919]/15 transition-all duration-500 ease-out ring-inset hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgb(25_25_25/0.1)] motion-reduce:transform-none motion-reduce:transition-none dark:bg-[#1a1a1a] dark:shadow-none dark:ring-0"
        >
          <Icon
            aria-hidden="true"
            className="mt-0.5 size-7 shrink-0 text-[#191919] dark:text-white"
          />
          <div className="min-w-0">
            <h3 className="text-[clamp(1.5rem,2.1vw,2rem)] leading-[1.1] font-semibold tracking-[-0.04em] text-[#191919] dark:text-white">
              {title}
            </h3>
            <p className="mt-3 text-[clamp(1.0625rem,1.15vw,1.1875rem)]/[1.6] font-normal tracking-[-0.015em] text-[#525252] dark:text-gray-300">
              {description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};
