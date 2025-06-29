import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["favicon.svg", "robots.txt", "icon.png", "icon-2.png"],
      manifest: require("./public/manifest.json"),

      devOptions: {
        enabled: true
      },

      workbox: {
        runtimeCaching: [
          {
            // ✅ تحديد الصفحات اللي هتتخزن أوفلاين
            // urlPattern: /^https:\/\/pwa-test-on-react-project-e9h7\.vercel\.app\/(home|about|contact)/,
            urlPattern: /^\/(home|about|contact)?$/,

            handler: "NetworkFirst",
            options: {
              cacheName: "custom-pages-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 7 * 24 * 60 * 60 // أسبوع
              }
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
