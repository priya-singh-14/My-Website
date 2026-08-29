"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const HEART = [
  "01100110",
  "11111111",
  "11111111",
  "11111111",
  "01111110",
  "00111100",
  "00011000",
];

const COLS = HEART[0].length;
const ROWS = HEART.length;
const CENTRE_X = (COLS - 1) / 2;
const CENTRE_Y = (ROWS - 1) / 2;

const PIXELS = HEART.flatMap((row, y) =>
  row.split("").map((pixel, x) => (pixel === "1" ? { x, y } : null))
)
  .filter((pixel): pixel is { x: number; y: number } => pixel !== null)
  .sort(
    (a, b) =>
      Math.hypot(a.x - CENTRE_X, a.y - CENTRE_Y) -
      Math.hypot(b.x - CENTRE_X, b.y - CENTRE_Y)
  );

const STEP_MS = 28;

function PixelHeart() {
  const [drawn, setDrawn] = useState(PIXELS.length);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const play = useCallback(() => {
    if (typeof window !== "undefined") {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (reduced.matches) return;
    }
    if (timer.current) clearInterval(timer.current);

    setDrawn(0);
    let step = 0;
    timer.current = setInterval(() => {
      step += 1;
      setDrawn(step);
      if (step >= PIXELS.length && timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    }, STEP_MS);
  }, []);

  useEffect(() => {
    play();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [play]);

  return (
    <span
      onMouseEnter={play}
      className="-m-2 block p-2 text-greyLight transition-colors hover:text-greyPrimary"
    >
      <svg
        viewBox={`0 0 ${COLS} ${ROWS}`}
        width={COLS * 2}
        height={ROWS * 2}
        fill="currentColor"
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        {PIXELS.slice(0, drawn).map(({ x, y }) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />
        ))}
      </svg>
    </span>
  );
}

export default function SiteFooter() {
  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),
    []
  );

  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [formatter]);

  return (
    <footer className="flex w-full items-center justify-between px-5 pt-5 pb-3 font-manrope text-[12px] text-greyAccent">
      <p>
        New York. <span className="tabular-nums">{time}</span>
      </p>
      <PixelHeart />
    </footer>
  );
}
