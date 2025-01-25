/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  output: 'standalone', // For Firebase's cloud function compatibility
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
            port: '',
            pathname: '/**',
            search: '',
          },
        ],
      },
};

export default nextConfig;
