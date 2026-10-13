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

    const resizeCanvas = (): void => {
      const bounds: DOMRect = container.getBoundingClientRect();
      const pixelRatio: number = Math.min(window.devicePixelRatio || 1, 2);

      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.filter = `blur(${blur}px)`;
    };

    const draw = (): void => {
      context.fillStyle = backgroundFill;
      context.globalAlpha = waveOpacity;
      context.fillRect(0, 0, width, height);
      time += animationSpeed;

      for (let wave = 0; wave < 5; wave += 1) {
        context.beginPath();
        context.lineWidth = waveWidth;
        context.strokeStyle = waveColors[wave % waveColors.length] ?? '#38bdf8';

        for (let x = 0; x <= width; x += 5) {
          const y: number = noise(x / 800, 0.3 * wave, time) * 100;
          context.lineTo(x, y + height * 0.5);
        }

        context.stroke();
        context.closePath();
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);
    resizeCanvas();
    animationFrame = window.requestAnimationFrame(draw);

    return (): void => {
      resizeObserver.disconnect();
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
