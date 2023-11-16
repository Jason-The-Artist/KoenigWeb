import VueCookies from 'vue-cookies'
import galery from '../public/galery.json';



import './assets/main.css'
import './assets/colors.css'
import './assets/nav.scss'
import './assets/view.scss'
import './assets/anim.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(VueCookies)

app.config.globalProperties.$galery = galery;

app.mount('#app')
