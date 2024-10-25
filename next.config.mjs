/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
