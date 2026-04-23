import { EventEmitter } from 'node:events'
import { fileURLToPath, URL } from 'node:url'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { remarkModifiedTime } from './remark-modified-time.js'

// Increase the limit to 20 or more
EventEmitter.defaultMaxListeners = 20

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx({
      remarkPlugins: [remarkModifiedTime],
    }),
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
