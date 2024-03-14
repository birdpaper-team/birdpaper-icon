import { defineConfig } from "vite";
const path = require("path");
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    VueSetupExtend(),
    vue({
      script: {
        defineModel: true,
      },
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
