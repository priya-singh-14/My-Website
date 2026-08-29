import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: __dirname,
  },
  images: {
    // AVIF first: it holds the gradients in the case-study mockups noticeably
    // better than WebP at the same file size. Browsers that don't send an AVIF
    // Accept header fall through to WebP.
    formats: ["image/avif", "image/webp"],
    // Next resolves an omitted `quality` prop to 75, and rejects any quality
    // that isn't in this list with a 400 rather than clamping it. 75 therefore
    // has to stay allowlisted so a component that forgets the prop degrades
    // instead of failing to render; 90 is what we actually pass everywhere.
    // Measured on the case-study covers, 90 lands at ~46dB PSNR (visually
    // lossless) for roughly 8% of the source PNG.
    qualities: [75, 90],
    remotePatterns: [
      { protocol: "https", hostname: "d2w9rnfcy7mm78.cloudfront.net" },
      { protocol: "https", hostname: "images.are.na" },
    ],
  },
}


export default nextConfig;
