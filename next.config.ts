import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  // Enable static exports for better SEO
  trailingSlash: true,
  // Add headers for better caching and SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/reza-profile-2025-v2.jpg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
                      {
              key: 'Content-Security-Policy',
              value: "frame-src 'self' https://adplist.org https://www.youtube.com; frame-ancestors 'self' https://adplist.org;",
            },
        ],
      },
    ]
  },
};

export default nextConfig;
