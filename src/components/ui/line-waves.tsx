import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactElement,
} from 'react';

interface LineWavesProps {
  color?: string;
  highlightColor?: string;
  lineCount?: number;
  lineWidth?: number;
  opacity?: number;
  baseIntensity?: number;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

const MAX_PIXEL_RATIO = 1.5;
const OVERFLOW_LINES = 8;

const hexToRgba = (color: string, opacity: number): string => {
  const value: string = color.replace('#', '');
  const normalized: string =
    value.length === 3
      ? value
          .split('')
          .map((character: string): string => character + character)
          .join('')
      : value;
  const red: number = Number.parseInt(normalized.slice(0, 2), 16);
  const green: number = Number.parseInt(normalized.slice(2, 4), 16);
  const blue: number = Number.parseInt(normalized.slice(4, 6), 16);

  return `rgb(${red} ${green} ${blue} / ${opacity})`;
};

export const LineWaves = ({
  color = '#38bdf8',
  highlightColor = '#a5f3fc',
  lineCount = 54,
  lineWidth = 1,
  opacity = 1,
  baseIntensity = 0.34,
  speed = 0.22,
  className,
  style,
}: LineWavesProps): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect((): (() => void) | undefined => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    const context: CanvasRenderingContext2D | null = canvas
      ? canvas.getContext('2d')
      : null;
    const container: HTMLElement | null = canvas?.parentElement ?? null;

    if (!canvas || !context || !container) {
      return undefined;
    }

    let width: number = 0;
    let height: number = 0;
    let frame: number = 0;
    let startedAt: number | undefined;
    let isVisible: boolean = true;
    const prefersReducedMotion: boolean = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const resize = (): void => {
      const bounds: DOMRect = container.getBoundingClientRect();
      const pixelRatio: number = Math.min(
        window.devicePixelRatio || 1,
        MAX_PIXEL_RATIO,
      );

      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = (time: number): void => {
      if (!width || !height) {
        return;
      }

      const elapsed: number = prefersReducedMotion
        ? 0
        : ((time - (startedAt ?? time)) / 1000) * speed;
      const spacing: number = height / (lineCount - 1);

      context.clearRect(0, 0, width, height);
      context.lineWidth = lineWidth;
      context.lineCap = 'round';

      for (
        let index = -OVERFLOW_LINES;
        index < lineCount + OVERFLOW_LINES;
        index += 1
      ) {
        const progress: number = index / (lineCount - 1);
        const center: number = (progress - 0.5) * 2;
        const shimmer: number = Math.exp(
          -Math.pow(center - Math.sin(elapsed * 0.55) * 0.16, 2) * 11,
        );
        const intensity: number =
          (baseIntensity + shimmer * (1 - baseIntensity)) * opacity;

        context.beginPath();
        context.strokeStyle = hexToRgba(
          shimmer > 0.38 ? highlightColor : color,
          intensity,
        );

        for (let x = -40; x <= width + 40; x += 5) {
          const horizontal: number = x / Math.max(width, 1);
          const wave: number =
            Math.sin(horizontal * 8.4 + elapsed * 2.2 + index * 0.23) * 18 +
            Math.sin(horizontal * 17 - elapsed * 1.5 + index * 0.1) * 6 +
            Math.sin(horizontal * 3.2 + elapsed * 0.7) * 13;
          const y: number =
            index * spacing + wave + (horizontal - 0.5) * height * -0.16;

          if (x === -40) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }

        context.stroke();
      }
    };

    const animate = (time: number): void => {
      startedAt ??= time;
      draw(time);

      if (isVisible && !prefersReducedMotion && speed > 0) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const restart = (): void => {
      window.cancelAnimationFrame(frame);
      draw(performance.now());

      if (isVisible && !prefersReducedMotion && speed > 0) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const resizeObserver: ResizeObserver = new ResizeObserver((): void => {
      resize();
      restart();
    });
    const visibilityObserver: IntersectionObserver = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]): void => {
        isVisible = entry?.isIntersecting ?? false;

        if (isVisible) {
          restart();
        } else {
          window.cancelAnimationFrame(frame);
        }
      },
    );

    resizeObserver.observe(container);
    visibilityObserver.observe(container);
    resize();
    restart();

    return (): void => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, [
    baseIntensity,
    color,
    highlightColor,
    lineCount,
    lineWidth,
    opacity,
    speed,
  ]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={style}
    />
  );
};
