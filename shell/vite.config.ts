/// <reference types="vitest" />

import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { federation } from '@gioboa/vite-module-federation';
import { AngularEsBuildAdapter } from '@angular-architects/native-federation/src/utils/angular-esbuild-adapter';


// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  root: 'src',
  publicDir: 'assets',
  server: {
    port: 3000,
    open: true,
    fs: {
      // Allowing access to both, project 
      // and shared folder in dev mode
      allow: [
        '.',
        '../../shared' 
      ]
    }
  },
  preview: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: `../dist/my-app`,
    emptyOutDir: true,
    target: 'es2020',
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    federation({
      options: {
        workspaceRoot: __dirname,
        outputPath: 'dist/my-app',
        tsConfig: 'tsconfig.app.json',
        federationConfig: 'federation.config.cjs',
        verbose: false,
        dev: command === 'serve',
      },
      adapter: AngularEsBuildAdapter,
    }),
    angular(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['test.ts'],
    include: ['**/*.spec.ts'],
    cache: {
      dir: `../node_modules/.vitest`,
    },
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
