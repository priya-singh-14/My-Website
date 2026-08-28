import type { GridItem } from "./data";

const arenaChannelSlug = "archive-7lrtekke6pq";
const arenaContentsUrl = `https://api.are.na/v3/channels/${arenaChannelSlug}/contents?per=100`;

interface ArenaImageVariant {
  src: string;
}

interface ArenaBlock {
  id: number;
  type: string; // "Image" | "Link" | "Text" | "Attachment" | "Media" | ...
  base_type: string; // "Block" | "Channel"
  description: { plain: string } | null; // rich-text object, not a plain string
  source: { url: string } | null;
  image?: {
    src: string;
    width: number;
    height: number;
    large?: ArenaImageVariant;
    medium?: ArenaImageVariant;
  };
  attachment?: {
    src?: string;
    url?: string;
    content_type?: string;
  };
}

interface ArenaContentsResponse {
  data: ArenaBlock[];
}

function isVideoAttachment(block: ArenaBlock): boolean {
  return Boolean(block.attachment?.content_type?.startsWith("video/"));
}

function toGridItem(block: ArenaBlock): GridItem | null {
  if (block.base_type !== "Block") return null; // skip nested channels

  const description = block.description?.plain?.trim() || undefined;
  const href = block.source?.url;

  if (isVideoAttachment(block)) {
    const src = block.attachment?.src ?? block.attachment?.url;
    if (!src) return null;
    return {
      id: String(block.id),
      kind: "video",
      src,
      poster: block.image?.src,
      // Are.na doesn't expose video intrinsic dimensions in this response;
      // 16:9 is a reasonable default until/unless that changes.
      width: block.image?.width ?? 1920,
      height: block.image?.height ?? 1080,
      description,
      href,
    };
  }

  const imageSrc = block.image?.large?.src ?? block.image?.medium?.src ?? block.image?.src;
  if (!imageSrc || !block.image) return null; // no visual media (e.g. a Text block) -- skip

  return {
    id: String(block.id),
    kind: "image",
    src: imageSrc,
    width: block.image.width,
    height: block.image.height,
    description,
    href,
  };
}

// No caching for now -- every open of the Archive modal refetches fresh from
// Are.na. Revisit if repeated opens turn out to be a real cost once content
// stabilizes.
export async function fetchArenaChannelItems(): Promise<GridItem[]> {
  const res = await fetch(arenaContentsUrl, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Are.na request failed: ${res.status}`);
  }
  const body: ArenaContentsResponse = await res.json();
  return body.data
    .map(toGridItem)
    .filter((item): item is GridItem => item !== null);
}
