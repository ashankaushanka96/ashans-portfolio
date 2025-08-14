import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ashans-portfolio/',
  server: {
    host: '0.0.0.0', // Allow access from all network interfaces
    port: 5173, // Default Vite port
    strictPort: false, // Allow Vite to find another port if 5173 is busy
  },
})
