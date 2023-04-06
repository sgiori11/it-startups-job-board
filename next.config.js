/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["hewqsbwtsubfefrjhlol.supabase.co"],
  },
  webpack: (config, options) => {
    // Add support for the "@/components" alias
    config.resolve.alias["@"] = path.join(__dirname, "components");

    // Return the updated config
    return config;
  },
};

module.exports = nextConfig;
