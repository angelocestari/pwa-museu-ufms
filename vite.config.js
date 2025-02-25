import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import { VitePWA } from "vite-plugin-pwa";
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        vuetify({autoImport: true}),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true
            },
            manifest: {
                name: 'Sala Imersiva - UFMS',
                short_name: 'Sala Imersiva',
                description: 'Célula eucarionte interativa para a sala imersiva da UFMS',
                theme_color: '#0088B7',
                background_color: '#ffffff',
                display: 'standalone',
                icons: [
                    {
                        src: new URL('@/public/icon-192x192.png', import.meta.url).href,
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: new URL('@/public/icon-512x512.png', import.meta.url).href,
                        sizes: '512x512',
                        type: 'image/png',
                    }
                ],
                screenshots: [
                    {
                        src: new URL('@/public/homepage.png', import.meta.url).href,
                        sizes: '2880x1704',
                        type: 'image/png'
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
