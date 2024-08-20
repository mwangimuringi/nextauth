/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          'aws-sdk': false,
        };
      }
      return config;
    },
  };
  
  export default nextConfig;
  