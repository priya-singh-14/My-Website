// Layout constants. These have to be synchronous (not inside the lazily-loaded
// engine) because the grid's item positions are computed at render time, on the
// server, for the first paint -- before the physics engine has hydrated, and
// before the actual container width is known.
// Physics/feel tunables (friction, ease, dragThresholdPx, wheelSensitivity,
// velocityEpsilon, nudge spring) live in engine.ts instead, since they're
// only needed once that module loads on the client.

// Space between neighbouring cells.
export const gapPx = 44;

// Breathing room inside each cell, between its bounds and its media.
export const cellPaddingPx = 12;

// Space reserved for each item's caption -- allows wrapping up to 2 lines
// (text-li: 16px / 1.6 line-height ~= 25.6px per line). Reserved whether or
// not the caption is currently revealed, so hovering can't reflow anything.
export const textGap = 6;
export const textBlockHeight = 52;

// Uniform square frame per item; the media is fitted inside it, never cropped.
export function squareSideForCellWidth(cellWidth: number): number {
  return Math.max(0, cellWidth - cellPaddingPx * 2);
}

export function cellHeightForCellWidth(cellWidth: number): number {
  return cellPaddingPx * 2 + squareSideForCellWidth(cellWidth) + textGap + textBlockHeight;
}

// Area each item aims for, as a fraction of its square frame. Lower shrinks
// near-square items further; 1 restores plain bounding-box fitting.
export const targetAreaRatio = 0.72;

// Largest (w x h) with the same aspect ratio that fits inside maxW x maxH,
// scaled toward a constant area first -- perceived size tracks area, not
// longest side, so box-fitting alone makes squares outweigh their neighbours.
// Falls back to filling the region for an item with no usable intrinsic size.
export function fitWithin(
  w: number,
  h: number,
  maxW: number,
  maxH: number
): { width: number; height: number } {
  if (!(w > 0) || !(h > 0)) return { width: maxW, height: maxH };
  const boxScale = Math.min(maxW / w, maxH / h);
  const areaScale = Math.sqrt((maxW * maxH * targetAreaRatio) / (w * h));
  const scale = Math.min(boxScale, areaScale);
  return { width: w * scale, height: h * scale };
}

// Staggered entrance. Delay is keyed off (row + column) so the grid resolves
// as a diagonal sweep from the top-left rather than row-by-row, and is capped
// so a large Are.na channel doesn't leave the last cells hanging.
// The duration/easing itself lives on the `archive-cell-in` animation in
// tailwind.config.ts, next to the keyframes it drives.
export const entranceStaggerMs = 45;
export const entranceMaxDelayMs = 700;

// Responsive column count, keyed by measured container width (not
// window.innerWidth -- the grid lives inside a modal, not always full-bleed).
// Falls through to the last (smallest) entry below its minWidth.
//
// One column short of what would fit, so each item reads as a piece of work.
export const columnBreakpoints: { minWidth: number; columns: number }[] = [
  { minWidth: 1800, columns: 5 },
  { minWidth: 1280, columns: 4 },
  { minWidth: 640, columns: 3 },
  { minWidth: 0, columns: 2 },
];

export function columnsForWidth(width: number): number {
  for (const breakpoint of columnBreakpoints) {
    if (width >= breakpoint.minWidth) return breakpoint.columns;
  }
  return columnBreakpoints[columnBreakpoints.length - 1].columns;
}

// Cell width is derived from (measured container width / columns), clamped
// to this range so columns never get uncomfortably cramped or oversized.
export const cellWidthMin = 140;
export const cellWidthMax = 460;

export function cellWidthForContainer(containerWidth: number, columns: number): number {
  const raw = (containerWidth - (columns - 1) * gapPx) / columns;
  return Math.min(cellWidthMax, Math.max(cellWidthMin, Math.floor(raw)));
}

// SSR fallback (real values aren't known until the client measures its
// container) -- matches the previous fixed desktop defaults, so first paint
// looks like the common case rather than the smallest breakpoint.
export const defaultColumns = 4;
export const defaultCellWidth = 320;
