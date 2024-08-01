import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Dossier de sortie pour les fichiers construits
    sourcemap: false, // Générer des sourcemaps si nécessaire
    minify: true, // Minification des fichiers en production
  },
  server: {
    host: true, // Open to local network and display URL
    open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env), // Open if it's not a CodeSandbox
  },
});
