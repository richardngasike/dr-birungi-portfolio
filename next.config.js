/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // This replaces the deprecated `images.domains`
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all external images (safe for portfolio)
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000', // Optional – only needed if loading from dev server
      },
    ],
  },
};

export default nextConfig;