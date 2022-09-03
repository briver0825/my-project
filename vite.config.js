import { defineConfig } from "vite";
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/ // .vue
      ],
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  }
})