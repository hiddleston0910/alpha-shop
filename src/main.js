import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { uniArrowLeft, uniArrowRight, uniPlus, uniMinus } from 'vue-unicons/dist/icons'

Unicon.add([uniArrowLeft, uniArrowRight, uniPlus, uniMinus])
Vue.use(Unicon)

Vue.config.productionTip = false

import './assets/application.css'
import store from './store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
