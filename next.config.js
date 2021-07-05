// eslint-disable-next-line @typescript-eslint/no-var-requires
const redirects = require('./config/redirects');

module.exports = {
  trailingSlash: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async redirects() {
    return redirects;
  },
};
