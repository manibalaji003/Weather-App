import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Weather-App/',  // Ensure this is the correct base path for your deployment
  plugins: [react()],
});
