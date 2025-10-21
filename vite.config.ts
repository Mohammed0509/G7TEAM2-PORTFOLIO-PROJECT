import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "/G7TEAM2-PORTFOLIO-PROJECT/", // change to "/G7TEAM2-PORTFOLIO-PROJECT/" if deploying to GitHub Pages
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

