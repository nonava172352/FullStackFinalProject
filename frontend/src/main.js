import Vue from 'vue'
import App from './App.vue'
import router from './route'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueCookies from 'vue-cookies'

Vue.use(BootstrapVue)
Vue.use(VueCookies, { expire: '15m'})
Vue.prototype.$users = {user_name: "name"}
Vue.prototype.$accessToken ="start"
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
