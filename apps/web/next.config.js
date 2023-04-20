module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  rewrites() {
    return {
      beforeFiles: [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "subdomain.anj.today",
          },
        ],
        destination: "/downloads/:path*",
        permanent: false,
      },
    ],
  };
  },
};