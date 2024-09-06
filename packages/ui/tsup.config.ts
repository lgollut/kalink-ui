import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/**/!(*.(style|test|spec)).ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));
