// Layout constants. These have to be synchronous (not inside the lazily-loaded
// engine) because the grid's item positions are computed at render time, on the
// server, for the first paint -- before the physics engine has hydrated, and
// before the actual container width is known.
// Physics/feel tunables (friction, ease, dragThresholdPx, wheelSensitivity,
// velocityEpsilon, nudge spring) live in engine.ts instead, since they're
// only needed once that module loads on the client.

export const gapPx = 24;

// Space reserved below each item's media for its caption -- allows wrapping
// up to 2 lines (text-li: 16px / 1.6 line-height ~= 25.6px per line).
export const textGap = 6;
export const textBlockHeight = 52;

// Responsive column count, keyed by measured container width (not
// window.innerWidth -- the grid lives inside a modal, not always full-bleed).
// Falls through to the last (smallest) entry below its minWidth.
export const columnBreakpoints: { minWidth: number; columns: number }[] = [
  { minWidth: 1280, columns: 6 },
  { minWidth: 1024, columns: 5 },
  { minWidth: 768, columns: 4 },
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
export const cellWidthMax = 320;

export function cellWidthForContainer(containerWidth: number, columns: number): number {
  const raw = (containerWidth - (columns - 1) * gapPx) / columns;
  return Math.min(cellWidthMax, Math.max(cellWidthMin, Math.floor(raw)));
}

// SSR fallback (real values aren't known until the client measures its
// container) -- matches the previous fixed desktop defaults, so first paint
// looks like the common case rather than the smallest breakpoint.
export const defaultColumns = 6;
export const defaultCellWidth = 260;
