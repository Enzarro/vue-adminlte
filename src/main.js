// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import 'admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css'
import 'admin-lte/dist/css/adminlte.min.css'

import 'admin-lte/plugins/jquery/jquery.min.js'

import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
import 'admin-lte/dist/js/adminlte.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
