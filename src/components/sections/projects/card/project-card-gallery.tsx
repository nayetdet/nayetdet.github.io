import type { ReactElement } from 'react';

interface ProjectCardGalleryProps {
  images: string[];
  title: string;
}

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
      <div className="relative h-48 bg-gray-900">
        <img
          src={firstImage}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {images.map((image, index): ReactElement => (
          <div key={image} className="relative h-48">
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
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
        <div className="relative row-span-2 h-48">
          <img
            src={firstImage}
            alt={`${title} 1`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        <div className="relative h-23">
          <img
            src={secondImage}
            alt={`${title} 2`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        <div className="relative h-23">
          <img
            src={thirdImage}
            alt={`${title} 3`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    );
  }

  return null;
};
