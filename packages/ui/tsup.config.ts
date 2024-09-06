import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/**/!(*.(style|css|test|spec|stories)).(ts|tsx)'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  external: ['react', '@vanilla-extract/css'],
  clean: true,
  ...options,
}));
