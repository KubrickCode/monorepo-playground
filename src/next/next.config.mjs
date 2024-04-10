/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: "http://127.0.0.1:3001/graphql",
      },
    ];
  },
};

export default nextConfig;
