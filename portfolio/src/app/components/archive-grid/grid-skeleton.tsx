import {
  defaultColumns,
  defaultCellWidth,
  gapPx,
  cellPaddingPx,
  textGap,
  textBlockHeight,
  squareSideForCellWidth,
  targetAreaRatio,
} from "./config";

const skeletonCount = defaultColumns * 2;
const skeletonSquare = squareSideForCellWidth(defaultCellWidth);
// A square item's real size, so the placeholder isn't heavier than what lands.
const skeletonMedia = skeletonSquare * Math.sqrt(targetAreaRatio);

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
        <div
          key={i}
          className="flex flex-col"
          style={{ width: defaultCellWidth, padding: cellPaddingPx, gap: textGap }}
        >
          {/* The same square frame + caption block the real cells use, so the
              swap to live content doesn't shift the column rhythm. Real items
              fit their own aspect ratio inside the square; those aren't known
              until the fetch resolves, so the placeholder stands in at the size
              a square item would take. */}
          <div className="flex items-end justify-center" style={{ height: skeletonSquare }}>
            <div
              className="animate-pulse bg-primary/10"
              style={{ width: skeletonMedia, height: skeletonMedia }}
            />
          </div>
          <div
            className="animate-pulse bg-primary/10"
            style={{ height: textBlockHeight, width: skeletonMedia, marginInline: "auto" }}
          />
        </div>
      ))}
    </div>
  );
}
