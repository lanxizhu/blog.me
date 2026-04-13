import presetRemToPx from '@unocss/preset-rem-to-px'

// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetWind3,
  transformerDirectives,
} from 'unocss'
import presetTheme from 'unocss-preset-theme'

import { dark, light } from './theme'

export default defineConfig({
  // ...UnoCSS options
  // theme: light,
  shortcuts: {
    'flex-center': `flex justify-center items-center`,
    'grid-center': `grid place-items-center`,

    'transition-base': `transition transition-property-all transition-duration-300`,

    'btn-base': `w-fit color-text bg-bg cursor-pointer border-rd-50 border-none op40 hover:op60 hover:bg-gray select-none transition-base`,
    'btn-rect': `btn-base px-20 py-10 bg-gray op60 hover:op100`,
    'btn-circle': `btn-base grid-center p-20`,
  },

  rules: [
    // [/^w-([\.\d]+)$/, ([_, num]) => ({ width: `${num}px` })],
  ],
  presets: [
    presetWind3(),
    presetTheme({ theme: { dark, light } }) as any,
    presetRemToPx({ baseFontSize: 4 }),
    presetAttributify({
      /* preset options */
    }),
  ],

  transformers: [transformerDirectives()],
})
