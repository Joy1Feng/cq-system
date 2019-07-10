import Vue from 'vue'
import App from './App'

import router from './router'
import './assets/style/reset.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
