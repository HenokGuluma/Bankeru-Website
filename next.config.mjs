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
  // Allow dev origins for Replit proxy
  allowedDevOrigins: [
    'cfcf3a5f-3a71-4e46-a0ec-8b22200ae1ea-00-13dpujrcyzylc.spock.replit.dev',
    '*.replit.dev',
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
  ],
}

export default nextConfig