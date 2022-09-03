import { defineConfig } from "unocss/vite";
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import transformerDirective from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  exclude: ['node_modules', 'dist', '.git', 'public'],
  presets: [presetAttributify(), presetUno()],
  transformers: [
    transformerDirective(),
    transformerVariantGroup()
  ],
  shortcuts: [
    ['flex-x-center', 'flex justify-center'],
    ['flex-y-center', 'flex items-center'],
    ['flex-center', 'flex items-center'],
    ['wh-full', 'w-full h-full'],
    [/^wh-(.*)$/, ([, c]) => `w-${c} h-${c}`],
    ['ellipsis-hidden', 'overflow-hidden text-ellipsis'],
  ],
  rules: [],
  theme: {
    colors: {
      'primary': '#ff88c2',
    }
  }
})