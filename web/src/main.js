import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'animate.css'
import '@/assets/styles/tailwind.css'
import '@/assets/styles/fonts.css'

createApp(App).use(router).mount('#app')
