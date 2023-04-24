/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
   
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
       
      },
      {
        protocol: 'https',
        hostname: 'unavatar.now.sh',
       
      },
    ],
  },
}

module.exports = nextConfig
