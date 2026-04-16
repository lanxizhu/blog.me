import presetRemToPx from '@unocss/preset-rem-to-px'

// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
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

    'btn-base': `w-fit color-text bg-bg cursor-pointer border-rd-12 border-none op40 hover:op60 hover:bg-gray select-none transition-base`,
    'btn-rect': `btn-base px-5 py-2 bg-gray op60 hover:op100`,
    'btn-circle': `btn-base grid-center p-5`,
  },

  rules: [
    // [/^w-([\.\d]+)$/, ([_, num]) => ({ width: `${num}px` })],
  ],
  presets: [
    presetWind3(),
    presetTheme({ theme: { dark, light } }) as any,
    // presetRemToPx({ baseFontSize: 4 }),
    presetAttributify({
      /* preset options */
    }),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
  ],

  transformers: [transformerDirectives()],
})
