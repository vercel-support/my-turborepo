module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  redirects() {
    return [
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
    ];
  },
};