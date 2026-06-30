/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/campaignkit',
  output: 'standalone',
  outputFileTracingRoot: import.meta.dirname,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
