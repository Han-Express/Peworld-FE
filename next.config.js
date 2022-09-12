/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_URL_BE: `https://coral-app-3yjfb.ondigitalocean.app/`,
    URL_SOCKET:`https://goldfish-app-h7cho.ondigitalocean.app/`
  },
  images: {
    domains: ['coral-app-3yjfb.ondigitalocean.app']
  }
}

module.exports = nextConfig
