import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from "url";
import path from "path"
import * as esbuild from "esbuild-wasm";   // <-- JS fallback

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // skip rollup native binary
  optimizeDeps: {
    exclude: ["@rollup/rollup-linux-x64-gnu"],
    esbuildOptions: {
      supported: {
        'top-level-await': true
      }
    }
  },

  // force rollup JS fallback
  build: {
    rollupOptions: {
      output: {},
    },
    target: "es2020",
    minify: false,
    sourcemap: false,
    // prevent esbuild native use:
    esbuild,
  },

  server: {
    allowedHosts: [
      "extinct-beau-diffusely.ngrok-free.dev"
    ]
  }
})
