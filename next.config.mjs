/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
     images: { 
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ibb.co',
      },
    ],
     unoptimized: true,
  },
    assetPrefix: isProd ? '/port-pages/' : '',
  basePath: isProd ? '/port-pages' : '',
  output: 'export'
}
export default nextConfig;
