import { useEffect, useRef, useState } from 'react';
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

const sectionList: Section[] = Object.values(sections);

const getActiveSection = (): UseActiveSectionReturn => {
  const offset: number = window.innerHeight * 0.35;
  const isAboveOffset = ({ id }: { id: string }): boolean =>
    (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <=
    offset;
  const section: Section = sectionList.findLast(isAboveOffset) ?? sections.home;

  return {
    sectionId: section.id,
    targetId:
      Object.values(section.subsections ?? {}).findLast(isAboveOffset)?.id ??
      section.id,
  };
};

export const useActiveSection = (): UseActiveSectionReturn => {
  const frameId = useRef<number>(0);
  const [activeSection, setActiveSection] = useState<UseActiveSectionReturn>({
    sectionId: sections.home.id,
    targetId: sections.home.id,
  });

  useEffect((): (() => void) => {
    const updateActiveSection = (): void =>
      setActiveSection((current: UseActiveSectionReturn) => {
        const next: UseActiveSectionReturn = getActiveSection();
        return current.sectionId === next.sectionId &&
          current.targetId === next.targetId
          ? current
          : next;
      });

    const handleViewportChange = (): void => {
      if (frameId.current === 0) {
        frameId.current = window.requestAnimationFrame(() => {
          frameId.current = 0;
          updateActiveSection();
        });
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', handleViewportChange, { passive: true });
    window.addEventListener('resize', handleViewportChange);

    return (): void => {
      window.cancelAnimationFrame(frameId.current);
      window.removeEventListener('scroll', handleViewportChange);
      window.removeEventListener('resize', handleViewportChange);
    };
  }, []);

  return activeSection;
};

export default useActiveSection;
