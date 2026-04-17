import { fileURLToPath, URL } from 'node:url'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
    UnoCSS({
      injectReset: true, // or a path to the reset file
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@/fonts': fileURLToPath(new URL(`src/fonts`, import.meta.url)),
      },
    },
  },
})
