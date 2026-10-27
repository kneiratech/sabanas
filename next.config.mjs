/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera .next/standalone (server.js + dependencias mínimas) para Azure App Service
  output: "standalone",
  // Fija la raíz del proyecto para que no se tome el package-lock.json de la carpeta padre
  outputFileTracingRoot: import.meta.dirname,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root: import.meta.dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
