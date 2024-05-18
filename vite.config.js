import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/website/",

  // rollupOptions: {
  //        input: {
  //        index: fileURLToPath(new URL('index.html', import.meta.url)),
  //        accordion: fileURLToPath(
  //            new URL('src/components/Accordion/index.html', import.meta.url)
  //        ),
  //     },
  // },
      
})
