import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  logLevel: "info",
  build: {
    target: "esnext",
  },
  plugins: [
    vue(),
    nodePolyfills({
      include: ["events"],
    }),
  ],
});
