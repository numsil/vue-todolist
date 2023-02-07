import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // node의 path 메소드 호출

// const path = require("path");
// const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
