/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['t.me', 'cdn4.telegram-cdn.org'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig
