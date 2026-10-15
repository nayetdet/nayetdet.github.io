import type { ReactElement } from 'react';
import { Image } from '@/components/common/image';
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
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              buttonClassName={`size-full ${images.length > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'}`}
              className="size-full object-cover transition-transform duration-300 group-hover/image:scale-[1.03] motion-reduce:transition-none"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious
            aria-label={previousSlideLabel}
            className="left-3 size-8 rounded-full border-0 bg-black/45 p-0 text-white opacity-0 shadow-md backdrop-blur-sm transition-[opacity,background-color,transform] duration-300 ease-out group-hover/gallery:opacity-100 hover:scale-105 hover:bg-black/70 hover:text-white focus-visible:opacity-100 motion-reduce:transition-none"
          />
          <CarouselNext
            aria-label={nextSlideLabel}
            className="right-3 size-8 rounded-full border-0 bg-black/45 p-0 text-white opacity-0 shadow-md backdrop-blur-sm transition-[opacity,background-color,transform] duration-300 ease-out group-hover/gallery:opacity-100 hover:scale-105 hover:bg-black/70 hover:text-white focus-visible:opacity-100 motion-reduce:transition-none"
          />
        </>
      )}
    </Carousel>
  );
};
