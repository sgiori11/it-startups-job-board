/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ["hewqsbwtsubfefrjhlol.supabase.co"],
  },
  // Other Next.js configuration options...
  nextConfig,
  paths: {
    "@/*": ["components/*"]
  }
};

