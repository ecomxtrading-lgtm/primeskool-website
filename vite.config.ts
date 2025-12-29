import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Vercel'de kök domain için base "/", GH Pages için alt dizin.
  base: process.env.VERCEL ? "/" : "/primeskool-website/",
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    // Vercel: dist, GH Pages: docs (gh-pages için)
    outDir: process.env.VERCEL ? "dist" : "docs",
    emptyOutDir: true,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
