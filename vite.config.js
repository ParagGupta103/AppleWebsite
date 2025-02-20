import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 1) Set the base path to your GitHub repository name
  //    Example: '/my-cool-project/'
  base: '/AppleWebsite/',

  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsm-x9",
      project: "javascript-react"
    }),
  ],
  build: {
    // 2) Keep your sourcemap settings or any other config you need
    sourcemap: true
  },
});
