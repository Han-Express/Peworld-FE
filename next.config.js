/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL_BE: `https://coral-app-3yjfb.ondigitalocean.app/`
  }
}

module.exports = nextConfig
