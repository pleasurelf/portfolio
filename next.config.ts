import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ['192.168.0.51'],
};

export default nextConfig;
