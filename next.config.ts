import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/", destination: "/mobile", permanent: false },
      { source: "/app", destination: "/mobile", permanent: true },
      { source: "/car-wash", destination: "/wash-bays", permanent: true },
      { source: "/shop", destination: "/products", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
