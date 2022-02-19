import { createApp } from 'vue'

import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'
import 'quasar/src/css/index.sass'
import './index.css'

import { Loading, Quasar } from 'quasar'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(Quasar, {
  plugins: { Loading }, // import Quasar plugins and add here
})

app.mount('#app')
