module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "downloads.anj.today",
          },
        ],
        permanent: true,
        destination: "/downloads/:path*",
      },
    ]
  },
};