interface MediaSkeletonProps {
  loaded: boolean;
  className?: string;
}

export default function MediaSkeleton({
  loaded,
  className = "",
}: MediaSkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 bg-greyLight/40 animate-pulse transition-opacity duration-300 ${
        loaded ? "pointer-events-none opacity-0" : "opacity-100"
      } ${className}`}
    />
  );
}
