import { useEffect, useState } from 'react';
import {
  sections,
  type Section,
  type SectionId,
  type SubsectionId,
} from '@/constants/sections';

export interface UseActiveSectionReturn {
  sectionId: SectionId;
  targetId: SectionId | SubsectionId;
}

export const useActiveSection = (): UseActiveSectionReturn => {
  const [activeSection, setActiveSection] = useState<UseActiveSectionReturn>({
    sectionId: sections.home.id,
    targetId: sections.home.id,
  });

  useEffect((): (() => void) => {
    const updateActiveSection = (): void => {
      const offset: number = window.innerHeight * 0.35;
      const section: Section =
        Object.values<Section>(sections).findLast(
          ({ id }) =>
            (document.getElementById(id)?.getBoundingClientRect().top ??
              Infinity) <= offset,
        ) ?? sections.home;

      setActiveSection({
        sectionId: section.id,
        targetId:
          Object.values(section.subsections ?? {}).findLast(
            ({ id }) =>
              (document.getElementById(id)?.getBoundingClientRect().top ??
                Infinity) <= offset,
          )?.id ?? section.id,
      });
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return (): void => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return activeSection;
};

export default useActiveSection;
