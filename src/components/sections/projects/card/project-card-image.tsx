import type { ReactElement } from 'react';

interface ProjectCardImageProps {
  src: string;
  alt: string;
  className: string;
}

export const ProjectCardImage = ({
  src,
  alt,
  className,
}: ProjectCardImageProps): ReactElement => (
  <div className={className}>
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 size-full object-cover"
    />
  </div>
);
