import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gis-lab-website/', // This affects the base URL
  build: {
    outDir: 'dist', 
  },
});
