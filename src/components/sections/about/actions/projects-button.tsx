import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { FolderGit2 } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { sections } from '@/constants/sections';
import { scrollTo } from '@/utils/scroll';

export const ProjectsButton = (): ReactElement => {
  const { t } = useTranslation();
  const { isDarkTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={(): void => scrollTo(sections.projects.id)}
      style={{ borderColor: isDarkTheme ? 'transparent' : '#000000' }}
      className={`inline-flex h-auto w-52 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl border-2 px-7 py-4 text-base/6 font-semibold whitespace-nowrap transition-colors outline-none focus-visible:ring-2 focus-visible:outline-none ${isDarkTheme ? 'border-transparent bg-black text-white hover:bg-[#222222] focus-visible:ring-white/50' : 'border-[#191919] bg-white text-[#191919] hover:bg-gray-100 focus-visible:ring-[#191919]/50'}`}
    >
      {t('about.viewProjects')}
      <FolderGit2 className="size-5" aria-hidden="true" />
    </button>
  );
};

export default ProjectsButton;
