import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/r93po9s39ihs/**", // replace with your actual space ID
      },
    ],
  },
};

export default nextConfig;
