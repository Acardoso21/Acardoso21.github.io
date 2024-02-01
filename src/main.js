import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'

loadFonts()
import AOS from 'aos'
import 'aos/dist/aos.css'
const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(AOS)
app.mount('#app')
// createApp(App).use(router)
//   .mount('#app')
