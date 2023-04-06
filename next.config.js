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
  ...nextConfig,
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "components"),
    };

    if (isServer) {
      // Replaces the 'quill' library with a dummy module during server-side rendering
      config.resolve.alias.quill = './empty-module.js';
    }

    return config;
  },
};
