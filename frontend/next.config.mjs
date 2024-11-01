/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dko62z7ix/**', // Adjust this to your specific Cloudinary path or use /** to match all sub-paths
      },
    ],
  },
};

export default nextConfig