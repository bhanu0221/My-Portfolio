import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 4000,   // 👈 change the port here
  },
  preview: {
    headers: {
      'Cache-Control': 'no-cache', // Applies to all previewed files  for fixing error on inspeact browser
    },
  },  
})
