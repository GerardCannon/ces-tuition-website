import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, PluginOption } from "vite";

import createIconImportProxy from "@github/spark/vitePhosphorIconProxyPlugin";
import { resolve } from 'path'

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname

// sparkPlugin() is intentionally not used. Its runtime-wrapper generateBundle
// step emits proxy.js and package.json into dist, and this site does not import
// the Spark runtime. createIconImportProxy() is the piece the pages still use.
//
// `npm run build` runs this config twice: a client build into dist/, then an
// SSR build of src/entry-server.tsx into .ssr-build/. scripts/prerender.mjs
// renders each route into dist. The client build is the GitHub Pages shell.
// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    tailwindcss(),
    // DO NOT REMOVE
    createIconImportProxy() as PluginOption,
  ],
  resolve: {
    alias: {
      '@': resolve(projectRoot, 'src')
    }
  },
  server: {
    port: 5000,
  },
  ssr: isSsrBuild ? { noExternal: true } : undefined,
  build: {
    outDir: isSsrBuild ? '.ssr-build' : 'dist',
    emptyOutDir: true,
    ...(isSsrBuild
      ? {}
      : {
          rollupOptions: {
            input: {
              main: resolve(projectRoot, 'index.html'),
            },
          },
        }),
  },
}));
