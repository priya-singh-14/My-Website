"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { EngineHandle, EngineItemHandle } from "./engine";
import type { GridItem } from "./data";
import {
  gapPx,
  cellPaddingPx,
  defaultColumns,
  defaultCellWidth,
  columnsForWidth,
  cellWidthForContainer,
  cellHeightForCellWidth,
  squareSideForCellWidth,
  fitWithin,
  entranceStaggerMs,
  entranceMaxDelayMs,
} from "./config";
import { useVideoAutoplay } from "./use-video-autoplay";
import { useHoverFocus } from "./hover-focus";
import GridCell from "./grid-cell";

interface InfiniteGridProps {
  items: GridItem[];
}

interface ItemLayout {
  baseX: number;
  baseY: number;
  // The item's media frame: square, and the same for every cell.
  squareSide: number;
  // The media's own size inside that square, at its intrinsic aspect ratio.
  mediaWidth: number;
  mediaHeight: number;
  cellHeight: number;
  entranceDelayMs: number;
}

// One extra column/row of overhang, so wrapped items enter from off-screen.
const tileOverhangColumns = 1;
const tileOverhangRows = 1;

// The tile must be a full rectangle: a ragged last row tiles as a repeating hole.
function padToRectangle(items: GridItem[], columns: number, minRows: number): GridItem[] {
  if (items.length === 0) return items;
  const rows = Math.max(minRows, Math.ceil(items.length / columns));
  const target = columns * rows;
  if (items.length === target) return items;
  return Array.from({ length: target }, (_, i) => items[i % items.length]);
}

// Uniform square frame per cell, so rows stay even; aspect ratio lives inside it.
function computeLayout(items: GridItem[], columns: number, cellWidth: number) {
  const rows = Math.max(1, Math.ceil(items.length / columns));
  const squareSide = squareSideForCellWidth(cellWidth);
  const cellHeight = cellHeightForCellWidth(cellWidth);

  const layouts: ItemLayout[] = items.map((item, i) => {
    const row = Math.floor(i / columns);
    const col = i % columns;
    const media = fitWithin(item.width, item.height, squareSide, squareSide);
    return {
      baseX: col * (cellWidth + gapPx),
      baseY: row * (cellHeight + gapPx),
      squareSide,
      mediaWidth: media.width,
      mediaHeight: media.height,
      cellHeight,
      entranceDelayMs: Math.min((row + col) * entranceStaggerMs, entranceMaxDelayMs),
    };
  });

  const tileW = columns * (cellWidth + gapPx);
  const tileH = rows * (cellHeight + gapPx);

  return { tileW, tileH, layouts };
}

export default function InfiniteGrid({ items }: InfiniteGridProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const engineRef = useRef<EngineHandle | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // SSR-safe defaults; corrected once the client measures the real
  // container width (modal width varies, so window.innerWidth isn't right).
  const [visibleColumns, setVisibleColumns] = useState(defaultColumns);
  const [cellWidth, setCellWidth] = useState(defaultCellWidth);
  // A row count, not a raw height, so a mobile URL bar sliding away doesn't churn.
  const [visibleRows, setVisibleRows] = useState(2);
  // Cells stay out of the DOM until measured, or the entrance stagger restarts.
  const [measured, setMeasured] = useState(false);
  // Driven by the shared hover tracker, not each cell's own mouseenter.
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  // Cells are sized for the columns that actually fit; the layout then spreads
  // the items over one more column/row than that to give the wrap its overhang.
  const columns = visibleColumns + tileOverhangColumns;
  const paddedItems = padToRectangle(items, columns, visibleRows + tileOverhangRows);

  const { tileW, tileH, layouts } = computeLayout(paddedItems, columns, cellWidth);

  // Re-observes whenever the rendered cell set changes.
  useVideoAutoplay(
    viewportRef,
    reducedMotion,
    `${measured}:${paddedItems.length}:${cellWidth}`
  );

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

    const applySize = (width: number, height: number) => {
      const nextColumns = columnsForWidth(width);
      const nextCellWidth = cellWidthForContainer(width, nextColumns);
      const cellHeight = cellHeightForCellWidth(nextCellWidth);
      setVisibleColumns(nextColumns);
      setCellWidth(nextCellWidth);
      setVisibleRows(Math.max(1, Math.ceil(height / (cellHeight + gapPx))));
      setMeasured(true);
    };

    applySize(viewport.clientWidth, viewport.clientHeight);

    const observer = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (rect?.width) applySize(rect.width, rect.height);
    });
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !measured) return;

    let cancelled = false;

    // Lazy-loaded after first paint; the markup above is server-rendered.
    import("./engine").then(({ createInfiniteGridEngine }) => {
      if (cancelled || !viewport) return;

      // Bounded by `layouts`, not the ref array, which outlives a breakpoint change.
      const engineItems: EngineItemHandle[] = [];
      for (let i = 0; i < layouts.length; i++) {
        const el = itemRefs.current[i];
        if (el) engineItems.push({ el, baseX: layouts[i].baseX, baseY: layouts[i].baseY });
      }

      engineRef.current = createInfiniteGridEngine({
        viewport,
        items: engineItems,
        tileW,
        tileH,
        // Needed for the edge fade -- the engine has to know how big a cell is
        // to tell how far into the viewport it has travelled.
        itemW: cellWidth,
        itemH: layouts[0]?.cellHeight ?? cellWidth,
        reducedMotion,
      });
    });

    return () => {
      cancelled = true;
      engineRef.current?.destroy();
      engineRef.current = null;
      setFocusedIndex(null);
    };
    // Re-attaches to fresh base positions on a breakpoint change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, measured, columns, cellWidth, visibleRows, tileW, tileH, reducedMotion]);

  const handleFocusChange = useCallback((el: HTMLElement | null) => {
    engineRef.current?.setFocus(el);
    const index = el ? itemRefs.current.indexOf(el) : -1;
    setFocusedIndex(index >= 0 ? index : null);
  }, []);

  useHoverFocus(viewportRef, handleFocusChange);

  return (
    <div
      ref={viewportRef}
      className="relative h-full w-full touch-none select-none overflow-hidden"
    >
      {measured &&
        paddedItems.map((item, i) => (
          <GridCell
            // Index-suffixed: padToRectangle can repeat an item to square off
            // the tile, so ids alone aren't unique.
            key={`${item.id}-${i}`}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            item={item}
            squareSide={layouts[i].squareSide}
            mediaWidth={layouts[i].mediaWidth}
            mediaHeight={layouts[i].mediaHeight}
            focused={focusedIndex === i}
            priority={i < 6}
            entranceDelayMs={reducedMotion ? 0 : layouts[i].entranceDelayMs}
            animateEntrance={!reducedMotion}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: cellWidth,
              height: layouts[i].cellHeight,
              padding: cellPaddingPx,
              // Engine-driven per frame: transform pans, opacity edge-fades.
              willChange: "transform, opacity",
              // Base position for first paint, before the engine hydrates.
              transform: `translate3d(${layouts[i].baseX}px, ${layouts[i].baseY}px, 0)`,
            }}
          />
        ))}
    </div>
  );
}
