/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL_BE: 'http://localhost:5000'
  }
}

module.exports = nextConfig
