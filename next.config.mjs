/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "rickandmortyapi.com",
        pathname: '/api/**' //звездочки, чтобы указать, что после / может что-то быть
      }
    ]
  }// для того чтобы разрешить отображать img с этого ресурса
};

export default nextConfig;
