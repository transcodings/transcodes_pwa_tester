import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: 'public',
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'sw.js', // since we're now in public directory
          dest: '.',
        },
      ],
    }),
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    open: true,
    port: 5173,
  },
});
