import { defineConfig } from "vite";
const path = require("path");
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";

export default async () => {
  const UnoCSS = (await import("unocss/vite")).default;

  return defineConfig({
    plugins: [
      vue({
        script: {
          defineModel: true,
        },
      }),
      UnoCSS(),
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
};
