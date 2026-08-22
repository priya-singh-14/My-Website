import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "d2w9rnfcy7mm78.cloudfront.net" },
      { protocol: "https", hostname: "images.are.na" },
    ],
  },
}


export default nextConfig;
