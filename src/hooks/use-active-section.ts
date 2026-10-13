import { useEffect, useState } from 'react';
import type { Section } from '@/constants/sections';

export function useActiveSection(sections: readonly Section[]): string {
  const [activeSectionId, setActiveSectionId] = useState<string>(
    sections[0]?.id ?? '',
  );

  useEffect((): (() => void) => {
    const updateActiveSection = (): void => {
      const activationLine: number = window.innerHeight * 0.35;
      const activeId: string = sections.reduce(
        (currentId: string, { id }: Section): string =>
          (document.getElementById(id)?.getBoundingClientRect().top ??
            Infinity) <= activationLine
            ? id
            : currentId,
        sections[0]?.id ?? '',
      );

      setActiveSectionId(activeId);
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
