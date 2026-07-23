import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed at chrisrglass.github.io/trust-typology/ via GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/trust-typology/',
})
