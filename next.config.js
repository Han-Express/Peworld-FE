/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_URL_BE: `https://vast-red-duck-cuff.cyclic.app/`,
    URL_SOCKET:`https://cyan-magnificent-frog.cyclic.app/`
  },
  images: {
    domains: ['vast-red-duck-cuff.cyclic.app']
  }
}

module.exports = nextConfig
