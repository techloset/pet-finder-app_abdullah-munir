import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({
      REACT_APP_API_KEY: process.env.VITE_APP_API_KEY || "x6ty0NnOjoeXPkrGRLoMTXffnuhSLcsinNci8DV9bl4IlF4M9b",
      REACT_APP_API_SECRET: process.env.VITE_APP_API_SECRET || "mBD6eu0JvZ7bCYfCnsQRtBZ9hwobQEM3Q2UG7oie",
    }),
  ],
});
 