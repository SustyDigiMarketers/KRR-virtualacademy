import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base set to '/' for custom domain (serves from root)
  base: '/',
  build: {
    outDir: 'dist',
  }
});