import type { ReactElement, ReactNode } from 'react';

interface SubsectionTitleProps {
  children: ReactNode;
}

export const SubsectionTitle = ({
  children,
}: SubsectionTitleProps): ReactElement => (
  <h3 className="text-[clamp(2.75rem,5vw,5.5rem)] leading-[0.94] font-semibold tracking-[-0.06em] text-[#191919] dark:text-white">
    {children}
  </h3>
);

export default SubsectionTitle;
