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
                  value: "downloads.anj.today",
                },
              ],
              destination: "/downloads/:path*",
            },
        ]
    }
}
};