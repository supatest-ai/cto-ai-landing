import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Enable minification for better performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Generate source maps for debugging in production
    sourcemap: false,
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
        // Add cache-busting hashes to filenames
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    // Optimize assets for better caching
    assetsInlineLimit: 4096, // Inline small assets to reduce requests
  },
  // Preview configuration for better SEO testing
  preview: {
    port: 3000,
    open: true,
    // Add cache headers for preview
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
  // Development server configuration
  server: {
    port: 3000,
    open: true,
  },
});
