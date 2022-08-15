/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
    },
  },
}
const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = nextConfig
