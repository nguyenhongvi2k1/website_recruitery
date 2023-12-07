/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['images.unsplash.com', 'res.cloudinary.com', 'localhost']
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