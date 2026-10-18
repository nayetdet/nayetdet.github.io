import { useEffect, useState, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface ImageProps {
  src: string;
  alt: string;
  className: string;
  buttonClassName?: string;
  onClick?: () => void;
  onExpand?: () => void;
}

export const Image = ({
  src,
  alt,
  className,
  buttonClassName = '',
  onClick,
  onExpand,
}: ImageProps): ReactElement => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  const trigger = (
    <button
      type="button"
      aria-label={t('image.expand', { alt })}
      className={`group/image relative block overflow-hidden ${buttonClassName}`}
      onClick={onExpand ?? onClick}
    >
      {!isLoaded && (
        <Skeleton
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full rounded-none"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        className={cn(className, isLoaded ? 'opacity-100' : 'opacity-0')}
      />
    </button>
  );

  if (onExpand !== undefined) {
    return trigger;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      {isOpen && (
        <DialogContent
          onClick={(event): void => {
            const target = event.target;
            if (
              target instanceof Element &&
              !target.closest('[data-expanded-image]')
            ) {
              setIsOpen(false);
            }
          }}
        >
          <DialogTitle>{alt}</DialogTitle>
          <img
            data-expanded-image
            src={src}
            alt={alt}
            draggable={false}
            className="max-h-[90dvh] max-w-[92vw] object-contain"
          />
        </DialogContent>
      )}
    </Dialog>
  );
};
