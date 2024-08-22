import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/YoavnnyMoscoso/',  // Set this to the repository name if using GitHub Pages
})
