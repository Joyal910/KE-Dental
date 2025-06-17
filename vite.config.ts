import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // instead of base: '/KE-Dental/',
  optimizeDeps: {
    exclude: ['lucide-react'],
    
  },
});
