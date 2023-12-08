/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['images.unsplash.com', 'res.cloudinary.com', 'localhost',
      'insieutoc.vn','png.pngtree.com', 'logoart.vn', 'iweb.tatthanh.com.vn', 'gudlogo.com',
    'adtimin.vn','cdn.pixabay.com', 'www.vietnamworks.com']
    },
    experimental: {
      newNextLinkBehavior: true
    },
    serverRuntimeConfig: {
      // Will only be available on the server side
      revalidateSecretToken: process.env.REVALIDATE_SECRET_TOKEN
    },
  
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svg/webpack',
            options: { icon: true }
          }
        ]
      });
  
      return config;
    }
  };
  
  module.exports = nextConfig;