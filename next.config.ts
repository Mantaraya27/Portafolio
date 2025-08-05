import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizaciones de rendimiento
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
  
  // Configuración de compilación para navegadores modernos
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimización de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Configuración de webpack para reducir el bundle
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimizar para navegadores modernos
      config.target = 'esnext';
    }
    return config;
  },
  
  // Headers para optimización
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
