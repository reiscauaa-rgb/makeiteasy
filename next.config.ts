import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Headers — sem X-Frame-Options para permitir iframes externos (Kommo)
  async headers() {
    return [];
  },
};

export default nextConfig;
 