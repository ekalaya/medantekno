import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Only use static export for production builds (GitHub Pages)
  // In development, allow dynamic routes for Keystatic
  output: isProd ? 'export' : undefined,
  images: {
    unoptimized: true, // Required for static export
  },
  // Exclude Keystatic routes from static export
  // These only work in development with a Node.js server
  ...(isProd && {
    experimental: {
      // This tells Next.js to skip these routes during static export
    },
  }),
};

export default nextConfig;

