import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import store from './store/store.js'
import style from'./style.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  

  router,
  store,
  render: h => h(App)
})
