import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'animate.css'

import './assets/css/tailwind.css'
import './assets/css/app.css'

import router from './router/router'

createApp(App).use(router).mount('#app')
