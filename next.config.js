/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'is**'
      }
    ]
  }

}

module.exports = nextConfig
