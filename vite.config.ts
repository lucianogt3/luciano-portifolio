import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/luciano-portifolio/', // ⬅️ IMPORTANTE: nome do seu repositório
})
