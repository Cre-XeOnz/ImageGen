import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Replace import.meta.dirname with __dirname
const rootDir = path.resolve(__dirname, "client");

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    // skip Replit-only plugin on Render
  ],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: rootDir,
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
