import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CarouselApi = UseEmblaCarouselType[1];
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];
type CarouselPlugin = Parameters<typeof useEmblaCarousel>[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
} & React.ComponentProps<'div'>;

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  orientation: 'horizontal' | 'vertical';
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

const useCarousel = (): CarouselContextProps => {
  const context = React.useContext(CarouselContext);

  if (context === null) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
};

export const Carousel = ({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: CarouselProps): React.ReactElement => {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === 'horizontal' ? 'x' : 'y' },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((selectedApi: CarouselApi) => {
    if (selectedApi === undefined) {
      return;
    }

    setCanScrollPrev(selectedApi.canScrollPrev());
    setCanScrollNext(selectedApi.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  React.useEffect(() => {
    if (api === undefined) {
      return;
    }

    setApi?.(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (api === undefined) {
      return;
    }

    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api.off('reInit', onSelect);
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        orientation,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        role="region"
        aria-roledescription="carousel"
        className={cn('relative', className)}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

export const CarouselContent = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.ReactElement => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      />
    </div>
  );
};

export const CarouselItem = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.ReactElement => {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  );
};

export const CarouselPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>): React.ReactElement => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -left-4 -translate-y-1/2'
          : '-top-4 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className="size-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
};

export const CarouselNext = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>): React.ReactElement => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -right-4 -translate-y-1/2'
          : '-bottom-4 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className="size-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
};

export type { CarouselApi };
