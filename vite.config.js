import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // '/portfolio/' keeps asset paths correct for GitHub Pages project repos
  base: '/portfolio/',

  build: {
    // Terser for proper minification + name mangling (obfuscation-level)
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 3,
        unsafe: true,
        unsafe_arrows: true,
      },
      mangle: {
        toplevel: true,    // mangle top-level variable names
        properties: false, // leave property names intact (breaks react otherwise)
      },
      format: {
        comments: false,   // strip all comments
      },
    },
    rollupOptions: {
      output: {
        // Hash-only filenames — no readable names in the deployed bundle
        entryFileNames: 'assets/[hash].js',
        chunkFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash].[ext]',
        // Split vendor chunk to reduce main bundle size
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    // Raise chunk warning limit for video-heavy site
    chunkSizeWarningLimit: 600,
  },
})
