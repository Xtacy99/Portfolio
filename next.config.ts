import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React strict mode
  swcMinify: true,       // Uses SWC compiler for faster builds and minification
  images: {
    // domains: ["example.com"], // Allow external images from specified domains
  },
  env: {
    CUSTOM_KEY: "value", // Define environment variables
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Add custom SVG handling
    });
    return config;
  },
};

export default nextConfig;
