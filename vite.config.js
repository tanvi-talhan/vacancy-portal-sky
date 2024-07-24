import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173 // or any other port you prefer
  }
})
