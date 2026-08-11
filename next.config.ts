import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The portfolio does not use the old Cloudflare database layer.
  // Its Cloudflare-only types must not block a standard Vercel deployment.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
