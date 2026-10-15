import type { ReactElement } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface ProjectCardGalleryProps {
  images: string[];
  title: string;
  previousSlideLabel: string;
  nextSlideLabel: string;
}

export const ProjectCardGallery = ({
  images,
  title,
  previousSlideLabel,
  nextSlideLabel,
}: ProjectCardGalleryProps): ReactElement | null => {
  if (images.length === 0) {
    return null;
  }

  return (
    <Carousel
      opts={{ align: 'start', loop: true }}
      className="group/gallery h-56 bg-gray-900 sm:h-64"
      aria-label={`${title} gallery`}
    >
      <CarouselContent className="ml-0 h-56 sm:h-64">
        {images.map((image, index): ReactElement => (
          <CarouselItem key={image} className="pl-0">
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious
            aria-label={previousSlideLabel}
            className="left-3 border-white/25 bg-black/35 text-white opacity-0 backdrop-blur-sm group-hover/gallery:opacity-100 hover:bg-black/60 hover:text-white focus-visible:opacity-100"
          />
          <CarouselNext
            aria-label={nextSlideLabel}
            className="right-3 border-white/25 bg-black/35 text-white opacity-0 backdrop-blur-sm group-hover/gallery:opacity-100 hover:bg-black/60 hover:text-white focus-visible:opacity-100"
          />
        </>
      )}
    </Carousel>
  );
};
