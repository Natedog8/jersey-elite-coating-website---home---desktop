import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      jsxRuntime: 'automatic'
    }),
    mode === "development" && screenGraphPlugin()
  ].filter(Boolean),
  publicDir: "./static",
  base: "./",
  esbuild: {
    jsx: 'automatic'
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
}));
