import type { ComponentProps, ReactElement } from 'react';

interface LanguageIconProps extends ComponentProps<'svg'> {
  isTilted: boolean;
}

export const LanguageIcon = ({
  className,
  isTilted,
  ...props
}: LanguageIconProps): ReactElement => (
  <svg
    {...props}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <g
      className={`transition-transform duration-300 ease-out motion-reduce:transition-none ${
        isTilted ? '-rotate-6' : 'rotate-0 group-hover:-rotate-6'
      }`}
      style={{ transformBox: 'view-box', transformOrigin: 'center' }}
    >
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </g>
  </svg>
);

export default LanguageIcon;
