import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteSvgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      apis: path.resolve(__dirname, "src/apis"),
      assets: path.resolve(__dirname, "src/assets"),
      common: path.resolve(__dirname, "src/common"),
      configs: path.resolve(__dirname, "src/configs"),
      constants: path.resolve(__dirname, "src/constants"),
      enums: path.resolve(__dirname, "src/enums"),
      features: path.resolve(__dirname, "src/features"),
      hooks: path.resolve(__dirname, "src/hooks"),
      libs: path.resolve(__dirname, "src/libs"),
      pages: path.resolve(__dirname, "src/pages"),
      contexts: path.resolve(__dirname, "src/contexts"),
      utils: path.resolve(__dirname, "src/utils"),
    },
  },
  plugins: [react(), viteSvgr()],
});
