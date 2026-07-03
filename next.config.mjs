/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/causebrief',
  output: 'standalone',
  outputFileTracingRoot: import.meta.dirname,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/causebrief',
        permanent: false,
        basePath: false
      }
    ];
  }
};

export default nextConfig;
