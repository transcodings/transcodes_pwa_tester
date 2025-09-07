import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public', // ✅ Ensure Vite serves from `public`
  build: {
    outDir: '../dist', // place dist outside of public/
    emptyOutDir: true,
  },
  server: {
    open: true, // ✅ Automatically opens the browser
    port: 5173, // ✅ Default Vite port
  },
});
