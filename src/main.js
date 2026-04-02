import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createWebHashHistory } from 'vue-router'

import { createBootstrap } from 'bootstrap-vue-next'

import 'bootstrap/dist/js/bootstrap.bundle'
import './assets/all.scss'
history: createWebHashHistory()
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(createBootstrap())
app.mount('#app')
