/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/snickerdoodle',
  output: 'standalone',
  outputFileTracingRoot: import.meta.dirname,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/snickerdoodle',
        permanent: false,
        basePath: false
      }
    ];
  }
};

export default nextConfig;
