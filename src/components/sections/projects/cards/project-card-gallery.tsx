import type { ReactElement } from 'react';

interface ProjectCardGalleryProps {
  images: string[];
  title: string;
}

const ProjectImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}): ReactElement => (
  <div className={className}>
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 size-full object-cover"
    />
  </div>
);

export const ProjectCardGallery = ({
  images,
  title,
}: ProjectCardGalleryProps): ReactElement | null => {
  const [firstImage, secondImage, thirdImage] = images;

  if (images.length === 1) {
    if (firstImage === undefined) {
      return null;
    }

    return (
      <ProjectImage
        src={firstImage}
        alt={title}
        className="relative h-48 bg-gray-900"
      />
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {images.map((image, index): ReactElement => (
          <ProjectImage
            key={image}
            src={image}
            alt={`${title} ${index + 1}`}
            className="relative h-48"
          />
        ))}
      </div>
    );
  }

  if (images.length === 3) {
    if (
      firstImage === undefined ||
      secondImage === undefined ||
      thirdImage === undefined
    ) {
      return null;
    }

    return (
      <div className="grid grid-cols-2 gap-2">
        <ProjectImage
          src={firstImage}
          alt={`${title} 1`}
          className="relative row-span-2 h-48"
        />
        <ProjectImage
          src={secondImage}
          alt={`${title} 2`}
          className="relative h-23"
        />
        <ProjectImage
          src={thirdImage}
          alt={`${title} 3`}
          className="relative h-23"
        />
      </div>
    );
  }

  return null;
};
