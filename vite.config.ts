import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({
      VITE_APP_API_KEY: process.env.REACT_APP_API_KEY,
      VITE_APP_API_SECRET: process.env.REACT_APP_API_SECRET,
    }),
  ],
});
 