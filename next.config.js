/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  // Other Next.js configuration options...
  nextConfig,
  paths: {
    "@/*": ["components/*"]
  }
};

