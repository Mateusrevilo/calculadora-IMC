import { NextFederationPlugin } from "@module-federation/nextjs-mf"

/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack(config){
    config.plugins.push(
     new NextFederationPlugin({
      name:'cardapio',
      filename:'static/chunks/remoteEntry.js',
      exposes:{
        "./Cardapio": './src/components/Cardapio' ,
      },
      shared: {
        react: {singleton: true, eager: true, requiredVersion: false},
        'react-dom': {singleton: true, eager: true, requiredVersion: false},
      },
     })
    );
    return config
  },
  reactStrictMode: true,
};

export default nextConfig;
