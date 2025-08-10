// src/main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// BootstrapVue (Bootstrap 4)
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Global SCSS (optional)
import './assets/styles.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue) // Registers BootstrapVue components + directives (e.g., v-b-tooltip)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
