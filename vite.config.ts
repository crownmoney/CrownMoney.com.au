import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

// Serve photos from the Google Cloud bucket through Netlify Image CDN, which
// resizes them and converts to AVIF/WebP per browser (build only; local dev
// keeps the original URLs). SVGs, PDFs and videos are left alone.
const IMAGE_URL = /https:\/\/storage\.googleapis\.com\/crown_money\/[^"'`\s]+?\.(?:png|jpe?g|webp)(?=["'`])/gi;
function netlifyImageCdn(): Plugin {
  return {
    name: 'netlify-image-cdn',
    apply: 'build',
    enforce: 'pre',
    transform(code, id) {
      if (!/\/src\/(?!seo\/).*\.tsx?$/.test(id) || !IMAGE_URL.test(code)) return null;
      IMAGE_URL.lastIndex = 0;
      return {
        code: code.replace(IMAGE_URL, (url) => `/.netlify/images?url=${encodeURIComponent(url)}&w=1600&q=80`),
        map: null,
      };
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [netlifyImageCdn(), react(), tailwindcss()],
    build: {
      manifest: true, // used by scripts/prerender.mjs to preload each page's JS chunk
    },
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
