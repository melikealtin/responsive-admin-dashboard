import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";

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
      find: "@",
      replacement: fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
