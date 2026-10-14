import { useEffect, useState } from 'react';
import { sections, type Section, type SectionId } from '@/constants/sections';

const sectionList: Section[] = Object.values(sections);

export const useActiveSection = (): SectionId => {
  const [activeSectionId, setActiveSectionId] = useState<SectionId>(
    sectionList[0]?.id ?? 'home',
  );

  useEffect((): (() => void) => {
    const updateActiveSection = (): void => {
      setActiveSectionId(
        sectionList.findLast(
          ({ id }: Section): boolean =>
            (document.getElementById(id)?.getBoundingClientRect().top ??
              Infinity) <=
            window.innerHeight * 0.35,
        )?.id ??
          sectionList[0]?.id ??
          'home',
      );
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return (): void => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return activeSectionId;
};

export default useActiveSection;
