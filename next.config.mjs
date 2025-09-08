/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for development in Replit
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Allow all hosts for Replit proxy environment
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
}

export default nextConfig