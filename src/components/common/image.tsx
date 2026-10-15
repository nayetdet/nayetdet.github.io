import { useState, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

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

  const trigger = (
    <button
      type="button"
      aria-label={t('image.expand', { alt })}
      className={`group/image block overflow-hidden ${buttonClassName}`}
      onClick={onExpand ?? onClick}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className={className}
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
