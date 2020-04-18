import Vue from 'vue'
import { VueEffector } from 'effector-vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueEffector)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
