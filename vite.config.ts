import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: '**/*.tsx',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      workbox: {
        // add this to cache all the imports
        globPatterns: ['**/*'],
        cleanupOutdatedCaches: false,
        runtimeCaching: [
          {
            urlPattern: ({url}) => {
              return url.pathname.startsWith('/api/v2')
            },
            handler: 'CacheFirst' as const,
            options: {
              cacheName: 'api-cache',
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      // add this to cache all the
      // static assets in the public folder
      injectRegister: 'auto',
      includeAssets: ['**/*'],
      manifest: {
        name: 'dorsa-assignment',
        short_name: 'Dorsa',
        start_url: '/',
        scope: './',
        display: 'standalone',
        lang: 'en',
        theme_color: '#733dd8',
        background_color: '#ffffff',
        icons: [
          {
            src: '/public/vite.svg',
            sizes: '32x32',
            type: 'image/svg',
          },
        ],
      },
    }),
  ],
})
