import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Fix: prevent Rollup from loading missing Linux binary on Netlify
  optimizeDeps: {
    exclude: ["@rollup/rollup-linux-x64-gnu"],
  },

  // Fix: force Rollup JS fallback
  build: {
    rollupOptions: {
      output: {},
    },
  },

  server: {
    allowedHosts: [
      "extinct-beau-diffusely.ngrok-free.dev",
    ],
  }
});
