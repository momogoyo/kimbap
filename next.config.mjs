import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['static.oku.club', 'localhost']
  }
}

export default withContentlayer(nextConfig)
