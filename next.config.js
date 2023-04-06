const path = require('path');

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
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "components"),
    };
    return config;
  },
};

