"use client";

import { m } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: number | string;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

type Square = {
  id: number;
  pos: [number, number];
};

function createSquares(
  count: number,
  containerWidth: number,
  containerHeight: number,
  cellWidth: number,
  cellHeight: number,
): Square[] {
  if (!containerWidth || !containerHeight) {
    return Array.from({ length: count }, (_, id) => ({
      id,
      pos: [0, 0] as [number, number],
    }));
  }

  return Array.from({ length: count }, (_, id) => ({
    id,
    pos: [
      Math.floor((Math.random() * containerWidth) / cellWidth),
      Math.floor((Math.random() * containerHeight) / cellHeight),
    ] as [number, number],
  }));
}

function randomPos(
  containerWidth: number,
  containerHeight: number,
  cellWidth: number,
  cellHeight: number,
): [number, number] {
  return [
    Math.floor((Math.random() * containerWidth) / cellWidth),
    Math.floor((Math.random() * containerHeight) / cellHeight),
  ];
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}: GridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const [squares, setSquares] = useState<Square[]>(() =>
    createSquares(numSquares, 0, 0, width, height),
  );

  const updateSquarePosition = (squareId: number) => {
    const { width: containerWidth, height: containerHeight } =
      dimensionsRef.current;

    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === squareId
          ? {
              ...sq,
              pos: randomPos(
                containerWidth,
                containerHeight,
                width,
                height,
              ),
            }
          : sq,
      ),
    );
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const syncFromRect = (rect: DOMRectReadOnly) => {
      dimensionsRef.current = {
        width: rect.width,
        height: rect.height,
      };
      setSquares(
        createSquares(numSquares, rect.width, rect.height, width, height),
      );
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        syncFromRect(entry.contentRect);
      }
    });

    resizeObserver.observe(container);
    syncFromRect(container.getBoundingClientRect());

    return () => resizeObserver.disconnect();
  }, [numSquares, width, height]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [squareX, squareY], id: squareId }, index) => (
          <m.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse",
              repeatDelay,
            }}
            onAnimationComplete={() => updateSquarePosition(squareId)}
            key={`${squareId}-${squareX}-${squareY}`}
            width={width - 1}
            height={height - 1}
            x={squareX * width + 1}
            y={squareY * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}

export default GridPattern;
