const withSvgr = require('@newhighsco/next-plugin-svgr')

/** @type {import('next').NextConfig} */
module.exports = withSvgr({
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      require('unplugin-icons/webpack')({
        compiler: 'jsx',
        jsx: 'react',
        extension: 'jsx',
      }),
    );

    return config;
  },
})
