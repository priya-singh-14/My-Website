const BLUR_LAYERS = [
  { blur: 4, from: 0, to: 12 },
  { blur: 8, from: 12, to: 30 },
  { blur: 12, from: 30, to: 55 },
  { blur: 20, from: 55, to: 80 },
  { blur: 32, from: 80, to: 100 },
];

export default function GlassOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {BLUR_LAYERS.map((layer, i) => {
        const mask = `linear-gradient(to bottom, transparent ${layer.from}%, black ${layer.to}%, black 100%)`;
        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${layer.blur}px)`,
              WebkitBackdropFilter: `blur(${layer.blur}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      })}
    </div>
  );
}
