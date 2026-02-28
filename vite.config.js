import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,      // hubi port-kan
    strictPort: true,
    hmr: {
      port: 5173,    // hubi HMR port
    },
  },
})
