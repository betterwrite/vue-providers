import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  root: "demo/",
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "vue-providers",
        replacement: resolve(__dirname, "./dist/index.mjs"),
      },
    ],
  },
});
