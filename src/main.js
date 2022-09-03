import { createApp } from 'vue'

import App from './App.vue'

import 'uno.css'
import '@unocss/reset/normalize.css'
import '@unocss/reset/eric-meyer.css'
import '@unocss/reset/tailwind.css'

import router from './router'

createApp(App)
  .use(router)
  .mount('#app')