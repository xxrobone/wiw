/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost:3000',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
