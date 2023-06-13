import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/main.scss";',
      },
    },
  },

  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}`,
      "@assets": `${path.resolve(__dirname, "src/assets")}`,
    },
  },
});
