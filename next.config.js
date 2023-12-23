/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["next-superjson-plugin", {}]],
  },
  images: {
    domains: [
      "res.cloundinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleuserscontent.com",
    ],
  },
};

module.exports = nextConfig;
