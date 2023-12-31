/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["uploadthing.com"],
  },
  experimental: {
    serverActions: true,
  },
}
export default nextConfig
