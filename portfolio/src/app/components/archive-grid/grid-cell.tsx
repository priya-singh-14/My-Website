import { forwardRef, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "@/components/fancy/text/typewriter";
import type { GridItem } from "./data";
import { useHoverCapable } from "./hover-focus";
import { textGap, textBlockHeight } from "./config";
import MediaSkeleton from "../media-skeleton";

interface GridCellProps {
  item: GridItem;
  style: CSSProperties;
  squareSide: number;
  mediaWidth: number;
  mediaHeight: number;
  // Decided by the grid's hover tracker, not this cell's own pointer events.
  focused?: boolean;
  priority?: boolean;
  entranceDelayMs?: number;
  animateEntrance?: boolean;
}

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-blackPrimary";

const GridCell = forwardRef<HTMLElement, GridCellProps>(function GridCell(
  {
    item,
    style,
    squareSide,
    mediaWidth,
    mediaHeight,
    focused = false,
    priority,
    entranceDelayMs = 0,
    animateEntrance = true,
  },
  ref
) {
  const alt = item.description ?? "Archive item";
  // Bumped on each reveal so the Typewriter remounts and retypes.
  const [typeKey, setTypeKey] = useState(0);
  const [hasTyped, setHasTyped] = useState(false);
  const [keyFocused, setKeyFocused] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const hoverCapable = useHoverCapable();
  // `=== false` so an unresolved query doesn't flash every caption on load.
  const revealed = hoverCapable === false || focused || keyFocused;

  useEffect(() => {
    if (!revealed || hoverCapable !== true) return;
    setHasTyped(true);
    setTypeKey((k) => k + 1);
  }, [revealed, hoverCapable]);

  const media =
    item.kind === "video" ? (
      <video
        className="absolute inset-0 h-full w-full object-contain"
        aria-label={alt}
        muted
        loop
        playsInline
        preload="metadata"
        poster={item.poster}
        src={item.src}
        onLoadedData={() => setLoaded(true)}
      />
    ) : (
      <Image
        src={item.src}
        alt={alt}
        fill
        quality={90}
        sizes={`${Math.ceil(squareSide)}px`}
        priority={priority}
        className="object-contain"
        onLoad={() => setLoaded(true)}
      />
    );

  // Entrance rides the inner wrapper: the engine owns the cell's own transform
  // and opacity, and a CSS animation on the cell would outrank both.
  const inner = (
    <div
      className={`flex flex-col ${
        animateEntrance ? "animate-archive-cell-in motion-reduce:animate-none" : ""
      }`}
      style={{
        gap: textGap,
        ...(animateEntrance ? { animationDelay: `${entranceDelayMs}ms` } : null),
      }}
    >
      {/* Media bottom-aligned in the square, so the caption sits directly under
          the image whatever its aspect ratio, and captions share a baseline. */}
      <div
        className="flex items-end justify-center"
        style={{ width: squareSide, height: squareSide }}
      >
        <div
          data-hit-region
          className="relative overflow-hidden bg-primary/5"
          style={{ width: mediaWidth, height: mediaHeight }}
        >
          <MediaSkeleton loaded={loaded} />
          {media}
        </div>
      </div>
      <div
        data-hit-region
        style={{ height: textBlockHeight, width: mediaWidth, marginInline: "auto" }}
        className={`transition-opacity duration-200 ease-out motion-reduce:transition-none ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
      >
        {item.description &&
          (hasTyped ? (
            <Typewriter
              key={typeKey}
              as="p"
              text={item.description}
              speed={20}
              loop={false}
              showCursor={false}
              className="line-clamp-2 text-li font-light text-primary/70"
            />
          ) : (
            <p className="line-clamp-2 text-li font-light text-primary/70">
              {item.description}
            </p>
          ))}
      </div>
    </div>
  );

  const revealProps = {
    onFocus: () => setKeyFocused(true),
    onBlur: () => setKeyFocused(false),
  };

  if (item.href) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={item.href}
        target="_blank"
        rel="noreferrer"
        style={style}
        className={focusRing}
        data-grid-hit
        {...revealProps}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      tabIndex={0}
      style={style}
      className={focusRing}
      data-grid-hit
      {...revealProps}
    >
      {inner}
    </div>
  );
});

export default GridCell;
