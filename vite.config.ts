import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public', // ✅ Ensure Vite serves from `public`
  server: {
    open: true, // ✅ Automatically opens the browser
    port: 5174, // ✅ Default Vite port
  },
});
