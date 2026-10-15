import { useState, type ReactElement } from 'react';
import { Image } from '@/components/common/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

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
  const [openImage, setOpenImage] = useState<number | null>(null);
  const [previewCarousel, setPreviewCarousel] = useState<CarouselApi>();

  if (images.length === 0) {
    return null;
  }

  return (
    <Carousel
      opts={{ align: 'start', loop: true }}
      setApi={setPreviewCarousel}
      className="group/gallery h-56 bg-gray-900 shadow-[0_8px_20px_rgb(25_25_25/0.1)] ring-1 ring-[#191919]/15 ring-inset sm:h-64 dark:shadow-none dark:ring-0"
      aria-label={`${title} gallery`}
    >
      <CarouselContent className="ml-0 h-56 sm:h-64">
        {images.map((image, index): ReactElement => (
          <CarouselItem key={image} className="pl-0">
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              onExpand={() => setOpenImage(index)}
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
      <Dialog
        open={openImage !== null}
        onOpenChange={(open) => {
          if (!open) {
            setOpenImage(null);
          }
        }}
      >
        {openImage !== null && (
          <DialogContent
            onClick={(event): void => {
              const target = event.target;
              if (
                target instanceof Element &&
                !target.closest('[data-project-gallery]')
              ) {
                setOpenImage(null);
              }
            }}
          >
            <DialogTitle>{title}</DialogTitle>
            <Carousel
              key={openImage}
              data-project-gallery
              opts={{ loop: true, startIndex: openImage }}
              onSlideChange={(dialogApi): void =>
                previewCarousel?.scrollTo(dialogApi.selectedScrollSnap())
              }
              className="w-full max-w-[92vw]"
              aria-label={`${title} gallery`}
            >
              <CarouselContent className="ml-0">
                {images.map((image, index): ReactElement => (
                  <CarouselItem key={image} className="pl-0">
                    <img
                      src={image}
                      alt={`${title} ${index + 1}`}
                      draggable={false}
                      className={`mx-auto max-h-[90dvh] max-w-full object-contain select-none [-webkit-touch-callout:none] [-webkit-user-select:none] ${images.length > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious
                    aria-label={previousSlideLabel}
                    className="left-3 size-10 border-0 bg-black/50 text-white hover:bg-black/75 hover:text-white sm:-left-14"
                  />
                  <CarouselNext
                    aria-label={nextSlideLabel}
                    className="right-3 size-10 border-0 bg-black/50 text-white hover:bg-black/75 hover:text-white sm:-right-14"
                  />
                </>
              )}
            </Carousel>
          </DialogContent>
        )}
      </Dialog>
    </Carousel>
  );
};
