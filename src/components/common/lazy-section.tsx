import {
  Suspense,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';

interface LazySectionProps {
  id: string;
  minHeight: string;
  children: ReactNode;
}

export const LazySection = ({
  id,
  minHeight,
  children,
}: LazySectionProps): ReactElement => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (section === null) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '640px 0px' },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="scroll-mt-24 bg-gray-50 dark:bg-[#121212]"
      style={isVisible ? undefined : { minHeight }}
    >
      {isVisible && (
        <Suspense fallback={<div aria-hidden="true" style={{ minHeight }} />}>
          {children}
        </Suspense>
      )}
    </section>
  );
};
