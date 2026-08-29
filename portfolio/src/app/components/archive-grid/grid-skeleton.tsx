import { defaultColumns, defaultCellWidth, gapPx, textGap, textBlockHeight } from "./config";

const skeletonCount = defaultColumns * 2;

// Shown while the live Are.na feed is loading. Doesn't try to guess real
// item aspect ratios (those aren't known until the fetch resolves) -- just a
// uniform pulsing grid roughly matching the real grid's column rhythm.
export default function GridSkeleton() {
  return (
    <div
      className="grid h-full w-full content-start overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(auto-fill, ${defaultCellWidth}px)`,
        gap: gapPx,
      }}
    >
      {Array.from({ length: skeletonCount }, (_, i) => (
        <div key={i} className="flex flex-col gap-1.5" style={{ width: defaultCellWidth }}>
          <div
            className="animate-pulse bg-primary/10"
            style={{ height: defaultCellWidth * 0.75 }}
          />
          <div
            className="animate-pulse bg-primary/10"
            style={{ height: textBlockHeight, marginTop: textGap - 6 }}
          />
        </div>
      ))}
    </div>
  );
}
