/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "../../Public/dist",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
    ],
  },
};

export default nextConfig;
