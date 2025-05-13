// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['yourdomain.com'], // Add any external image domains you use
  },

  eslint: {
    // Optional: disables ESLint errors from breaking builds (not for production)
    ignoreDuringBuilds: true,
  },

  typescript: {
    // Optional: disables TypeScript errors from breaking builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
