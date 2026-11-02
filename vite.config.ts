import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, '.') },
        { find: 'node-fetch', replacement: path.resolve(__dirname, 'src/node-fetch-browser.ts') },
        { find: /^formdata-polyfill(\/.*)?$/, replacement: path.resolve(__dirname, 'src/formdata-polyfill-browser.ts') },
        { find: /^fetch-blob(\/.*)?$/, replacement: path.resolve(__dirname, 'src/fetch-blob-browser.ts') },
      ],
    },
    optimizeDeps: {
      exclude: ['node-fetch', 'formdata-polyfill', 'fetch-blob'],
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify - file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    preview: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: true as const,
    },
  };
});
