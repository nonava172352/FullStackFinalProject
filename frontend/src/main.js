import Vue from 'vue'
import App from './App.vue'
import router from './route'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createProvider } from './vue-apollo'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
