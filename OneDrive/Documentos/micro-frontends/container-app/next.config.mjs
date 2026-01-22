import { NextFederationPlugin } from "@module-federation/nextjs-mf"

/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'container-app',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          carrinho: 'carrinho@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          cardapio: 'cardapio@http://localhost:3002/_next/static/chunks/remoteEntry.js'

        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: false },
          'react-dom': { singleton: true, eager: true, requiredVersion: false },
        },
      })
    );
    return config
  },
  reactStrictMode: true,
};

export default nextConfig;
