/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "lh3.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname: "images.pexels.com"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "investorplace.com"
      },
      {
        protocol: "https",
        hostname: "th.bing.com"
      },

    ]
  }
}

module.exports = nextConfig
