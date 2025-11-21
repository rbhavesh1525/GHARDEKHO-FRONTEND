import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from "url";
import path from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // ⛔ prevents Vite/Rollup from loading the failing native binary
  optimizeDeps: {
    exclude: ["@rollup/rollup-linux-x64-gnu"]
  },

  // 🛠 ensures Rollup uses JS fallback instead of native
  build: {
    rollupOptions: {
      // no custom output needed, just forcing fallback
      output: {},
    },
  },

  server: {
    allowedHosts: [
      "extinct-beau-diffusely.ngrok-free.dev"
    ]
  }
})
