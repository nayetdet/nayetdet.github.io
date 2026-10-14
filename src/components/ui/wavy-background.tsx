import { useEffect, useRef, type HTMLAttributes, type ReactNode } from 'react';
import { createNoise3D } from 'simplex-noise';
import { cn } from '@/lib/utils';

interface WavyBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: 'slow' | 'fast';
  waveOpacity?: number;
}

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = 'black',
  blur = 10,
  speed = 'fast',
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    const context: CanvasRenderingContext2D | null =
      canvas?.getContext('2d') ?? null;
    const container: HTMLElement | null = canvas?.parentElement ?? null;

    if (!canvas || !context || !container) {
      return undefined;
    }

    const noise = createNoise3D();
    const waveColors: string[] = colors ?? [
      '#38bdf8',
      '#818cf8',
      '#c084fc',
      '#e879f9',
      '#22d3ee',
    ];
    const animationSpeed: number = speed === 'slow' ? 0.001 : 0.002;
    let width: number = 0;
    let height: number = 0;
    let time: number = 0;
    let animationFrame: number = 0;
    let lastFrameTime: number = 0;
    let isVisible: boolean = true;
    let prefersReducedMotion: boolean = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const reducedMotionQuery: MediaQueryList = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );

    const resizeCanvas = (): void => {
      const bounds: DOMRect = container.getBoundingClientRect();
      const maxPixelRatio: number = window.matchMedia('(max-width: 767px)')
        .matches
        ? 1.25
        : 1.5;
      const pixelRatio: number = Math.min(
        window.devicePixelRatio || 1,
        maxPixelRatio,
      );

      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.filter = `blur(${blur}px)`;
    };

    const draw = (frameTime: number): void => {
      if (!isVisible || prefersReducedMotion) {
        return;
      }

      if (frameTime - lastFrameTime < 1000 / 30) {
        animationFrame = window.requestAnimationFrame(draw);
        return;
      }

      lastFrameTime = frameTime;
      context.fillStyle = backgroundFill;
      context.globalAlpha = waveOpacity;
      context.fillRect(0, 0, width, height);
      time += animationSpeed;

      for (let wave = 0; wave < 5; wave += 1) {
        context.beginPath();
        context.lineWidth = waveWidth;
        context.strokeStyle = waveColors[wave % waveColors.length] ?? '#38bdf8';

        const pointStep: number = width < 768 ? 8 : 6;

        for (let x = 0; x <= width; x += pointStep) {
          const y: number = noise(x / 800, 0.3 * wave, time) * 100;
          context.lineTo(x, y + height * 0.5);
        }

        context.stroke();
        context.closePath();
      }

      if (isVisible && !prefersReducedMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const updateAnimation = (): void => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      lastFrameTime = 0;

      if (isVisible) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]): void => {
        isVisible = entry?.isIntersecting ?? false;
        updateAnimation();
      },
    );
    const updateReducedMotion = (event: MediaQueryListEvent): void => {
      prefersReducedMotion = event.matches;
      updateAnimation();
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);
    visibilityObserver.observe(container);
    reducedMotionQuery.addEventListener('change', updateReducedMotion);
    resizeCanvas();
    updateAnimation();

    return (): void => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      reducedMotionQuery.removeEventListener('change', updateReducedMotion);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [backgroundFill, blur, colors, speed, waveOpacity, waveWidth]);

  return (
    <div
      className={cn(
        'relative flex h-full flex-col items-center justify-center',
        containerClassName,
      )}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 z-0 size-full"
      />
      <div className={cn('relative z-10', className)} {...props}>
        {children}
      </div>
    </div>
  );
};
