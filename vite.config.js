import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
    },
  },

  css: {
    devSourcemap: true
  },
  build: {
    sourcemap: true
  },

  base: '/Website-weather/',
})