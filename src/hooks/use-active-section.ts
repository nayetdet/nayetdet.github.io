import { useEffect, useState } from 'react';
import type { Section, SectionId } from '@/constants/sections';

export function useActiveSection(sections: readonly Section[]): SectionId {
  const [activeSectionId, setActiveSectionId] = useState<SectionId>(
    sections[0]?.id ?? 'home',
  );

  useEffect((): (() => void) => {
    const updateActiveSection = (): void => {
      setActiveSectionId(
        sections.findLast(
          ({ id }: Section): boolean =>
            (document.getElementById(id)?.getBoundingClientRect().top ??
              Infinity) <=
            window.innerHeight * 0.35,
        )?.id ??
          sections[0]?.id ??
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
  }, [sections]);

  return activeSectionId;
}
