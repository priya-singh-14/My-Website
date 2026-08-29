interface MediaSkeletonProps {
  loaded: boolean;
  className?: string;
}

export default function MediaSkeleton({
  loaded,
  className = "",
}: MediaSkeletonProps) {
  // animate-pulse has to be dropped once loaded, not just faded out: its
  // keyframes animate opacity, and an animated value beats the static
  // opacity-0 class in the cascade, so the overlay would otherwise keep
  // pulsing 0 -> .5 -> 0 forever on top of the media.
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 bg-greyLight/40 transition-opacity duration-300 ${
        loaded ? "pointer-events-none opacity-0" : "animate-pulse opacity-100"
      } ${className}`}
    />
  );
}
