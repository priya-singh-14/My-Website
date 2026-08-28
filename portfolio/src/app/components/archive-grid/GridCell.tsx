import { forwardRef, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "@/components/fancy/text/typewriter";
import type { GridItem } from "./data";
import { useHoverCapable } from "./HoverFocusBox";
import MediaSkeleton from "../media-skeleton";

interface GridCellProps {
  item: GridItem;
  style: CSSProperties;
  mediaHeight: number;
  priority?: boolean;
  // TODO: wire this to a lightbox/detail view for items with no href.
  onOpen?: (item: GridItem) => void;
}

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-blackPrimary";

const GridCell = forwardRef<HTMLElement, GridCellProps>(function GridCell(
  { item, style, mediaHeight, priority, onOpen },
  ref
) {
  const alt = item.description ?? "Archive item";
  // Bumped on every hover-in so the description's Typewriter remounts and
  // retypes from scratch. Stays plain static text until the first hover --
  // Typewriter always animates on mount, so it can't play on load otherwise.
  const [hoverKey, setHoverKey] = useState(0);
  const [hasHovered, setHasHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const hoverCapable = useHoverCapable();

  const media =
    item.kind === "video" ? (
      <video
        className="absolute inset-0 h-full w-full object-cover"
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
        sizes="(max-width: 768px) 60vw, 260px"
        priority={priority}
        className="object-cover"
        onLoad={() => setLoaded(true)}
      />
    );

  const inner = (
    <div className="flex h-full w-full flex-col gap-1.5">
      <div
        data-grid-item
        className="relative w-full overflow-hidden bg-primary/5"
        style={{ height: mediaHeight }}
      >
        <MediaSkeleton loaded={loaded} />
        {media}
      </div>
      {item.description &&
        (hasHovered ? (
          <Typewriter
            key={hoverKey}
            as="p"
            text={item.description}
            speed={20}
            loop={false}
            showCursor={false}
            className="line-clamp-2 text-li font-light text-primary/40"
          />
        ) : (
          <p className="line-clamp-2 text-li font-light text-primary/40">
            {item.description}
          </p>
        ))}
    </div>
  );

  const handleMouseEnter = () => {
    if (!hoverCapable) return;
    setHasHovered(true);
    setHoverKey((k) => k + 1);
  };

  if (item.href) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={item.href}
        style={style}
        className={focusRing}
        onMouseEnter={handleMouseEnter}
        data-cursor-ignore
      >
        {inner}
      </Link>
    );
  }

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      role="button"
      tabIndex={0}
      style={style}
      className={focusRing}
      onMouseEnter={handleMouseEnter}
      onClick={() => onOpen?.(item)}
      data-cursor-ignore
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen?.(item);
        }
      }}
    >
      {inner}
    </div>
  );
});

export default GridCell;
