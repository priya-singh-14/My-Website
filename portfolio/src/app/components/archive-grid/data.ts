export type MediaKind = "image" | "video";

// Shaped to map cleanly onto an Are.na block (description -> block
// description/title, image/attachment -> src/poster). See arena.ts for the
// live feed that produces these.
export interface GridItem {
  id: string;
  kind: MediaKind;
  src: string; // /public path or remote URL; image -> next/image, video -> <video src>
  poster?: string; // required for video: a still to show before/without playback
  width: number; // intrinsic px -- drives the rendered aspect ratio, see infinite-grid.tsx
  height: number; // intrinsic px
  description?: string;
  href?: string; // where a tap navigates, if anywhere
}
