import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  server: {
    open: true,
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/graphql": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/go": {
        target: "http://localhost:3002",
        changeOrigin: true,
      },
    },
  },
});
