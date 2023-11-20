/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["./"],
    prependData: `@import "./styles/_variables.scss";`,
  },
};

module.exports = nextConfig;
