const BLUR_AMOUNT = 14;

export default function GlassOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        backdropFilter: `blur(${BLUR_AMOUNT}px)`,
        WebkitBackdropFilter: `blur(${BLUR_AMOUNT}px)`,
        willChange: "opacity",
      }}
    />
  );
}
