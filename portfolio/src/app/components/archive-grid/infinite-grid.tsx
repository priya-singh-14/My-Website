"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { EngineHandle, EngineItemHandle } from "./engine";
import type { GridItem } from "./data";
import {
  gapPx,
  textGap,
  textBlockHeight,
  defaultColumns,
  defaultCellWidth,
  columnsForWidth,
  cellWidthForContainer,
} from "./config";
import { useVideoAutoplay } from "./use-video-autoplay";
import GridCell from "./grid-cell";
import HoverFocusBox from "./hover-focus-box";

interface InfiniteGridProps {
  items: GridItem[];
  onOpen?: (item: GridItem) => void;
}

interface ItemLayout {
  baseX: number;
  baseY: number;
  mediaHeight: number;
  cellHeight: number;
}

// Row-based layout: media is square (mediaHeight = cellWidth), so every
// item's cell is the same height and rows come out uniform -- no need for
// masonry's per-column height tracking.
function computeLayout(items: GridItem[], columns: number, cellWidth: number) {
  const rows = Math.ceil(items.length / columns);
  const mediaHeight = cellWidth;
  const cellHeight = mediaHeight + textGap + textBlockHeight;

  const layouts: ItemLayout[] = items.map((_, i) => {
    const row = Math.floor(i / columns);
    const col = i % columns;
    return {
      baseX: col * (cellWidth + gapPx),
      baseY: row * (cellHeight + gapPx),
      mediaHeight,
      cellHeight,
    };
  });

  const tileW = columns * (cellWidth + gapPx);
  const tileH = rows * (cellHeight + gapPx);

  return { tileW, tileH, layouts };
}

export default function InfiniteGrid({ items, onOpen }: InfiniteGridProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const engineRef = useRef<EngineHandle | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // SSR-safe defaults; corrected once the client measures the real
  // container width (modal width varies, so window.innerWidth isn't right).
  const [columns, setColumns] = useState(defaultColumns);
  const [cellWidth, setCellWidth] = useState(defaultCellWidth);

  const { tileW, tileH, layouts } = computeLayout(items, columns, cellWidth);

  useVideoAutoplay(viewportRef, reducedMotion);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const listener = () => setReducedMotion(query.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const applySize = (width: number) => {
      const nextColumns = columnsForWidth(width);
      setColumns(nextColumns);
      setCellWidth(cellWidthForContainer(width, nextColumns));
    };

    applySize(viewport.clientWidth);

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) applySize(width);
    });
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let cancelled = false;

    // Lazy-load the physics/loop module after first paint, out of the
    // critical path -- the grid markup above is already server-rendered.
    import("./engine").then(({ createInfiniteGridEngine }) => {
      if (cancelled || !viewport) return;

      const engineItems: EngineItemHandle[] = [];
      itemRefs.current.forEach((el, i) => {
        if (el) {
          engineItems.push({ el, baseX: layouts[i].baseX, baseY: layouts[i].baseY });
        }
      });

      engineRef.current = createInfiniteGridEngine({
        viewport,
        items: engineItems,
        tileW,
        tileH,
        reducedMotion,
      });
    });

    return () => {
      cancelled = true;
      engineRef.current?.destroy();
      engineRef.current = null;
    };
    // Depends on `items`/`columns`/`cellWidth` themselves (not derived
    // values) so a responsive breakpoint change re-attaches the engine to
    // fresh base positions.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, columns, cellWidth, tileW, tileH, reducedMotion]);

  const handleHoverRectChange = useCallback((itemRect: DOMRect | null) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    if (!itemRect) {
      engineRef.current?.setNudgeTarget(null, null);
      return;
    }
    const viewportRect = viewport.getBoundingClientRect();
    const itemCenterX = itemRect.left + itemRect.width / 2;
    const itemCenterY = itemRect.top + itemRect.height / 2;
    const viewportCenterX = viewportRect.left + viewportRect.width / 2;
    const viewportCenterY = viewportRect.top + viewportRect.height / 2;
    engineRef.current?.setNudgeTarget(
      itemCenterX - viewportCenterX,
      itemCenterY - viewportCenterY
    );
  }, []);

  return (
    <div
      ref={viewportRef}
      className="relative h-full w-full touch-none select-none overflow-hidden"
    >
      {items.map((item, i) => (
        <GridCell
          key={item.id}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          item={item}
          mediaHeight={layouts[i].mediaHeight}
          priority={i < 6}
          onOpen={onOpen}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: cellWidth,
            height: layouts[i].cellHeight,
            willChange: "transform",
            // Base position rendered synchronously (server-side too) so the
            // grid is already laid out correctly before the lazy-loaded
            // engine hydrates -- offset starts at 0, so this matches exactly
            // what the engine would compute for the first frame anyway.
            transform: `translate3d(${layouts[i].baseX}px, ${layouts[i].baseY}px, 0)`,
          }}
        />
      ))}
      <HoverFocusBox viewportRef={viewportRef} onHoverRectChange={handleHoverRectChange} />
    </div>
  );
}
