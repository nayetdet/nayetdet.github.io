import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { FolderGit2 } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { sections } from '@/constants/sections';

export const ProjectsButton = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <a
      href={sections.projects.href}
      className={buttonVariants({
        className:
          'h-auto w-52 justify-between rounded-xl bg-white px-7 py-4 text-base font-semibold text-[#191919] shadow-sm transition-colors hover:bg-gray-100 dark:bg-[#1a1a1a] dark:text-white dark:hover:bg-[#222222]',
      })}
    >
      {t('about.viewProjects')}
      <FolderGit2 className="size-5" aria-hidden="true" />
    </a>
  );
};

export default ProjectsButton;
