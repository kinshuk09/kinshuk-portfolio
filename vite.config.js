import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const origin = env.VITE_SITE_URL || env.CF_PAGES_URL || '';
  if (origin && !/^https?:\/\/[^/]+\/?$/.test(origin))
    throw new Error('VITE_SITE_URL must be an origin, for example https://portfolio.example.com');
  return {
    plugins: [react(), tailwindcss()],
    define: { __SITE_URL__: JSON.stringify(origin.replace(/\/$/, '')) },
    build: {
      target: 'es2022',
      rollupOptions: { output: { manualChunks: { motion: ['framer-motion'] } } },
    },
    server: { port: 5173, strictPort: true },
    preview: { port: 4173, strictPort: true },
  };
});
