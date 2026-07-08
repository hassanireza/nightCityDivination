import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base path keeps the build portable across GitHub Pages
// project sites (username.github.io/repo-name) without extra configuration.
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2020'
  }
});
