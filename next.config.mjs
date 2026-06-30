/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/campaignkit',
  output: 'standalone',
  outputFileTracingRoot: import.meta.dirname,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/campaignkit',
        permanent: false,
        basePath: false
      }
    ];
  }
};

export default nextConfig;
