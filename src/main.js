// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import {store} from "./vuex/store";

Vue.config.productionTip = false
// axios.defaults.baseURL="http://localhost:8089"
axios.defaults.baseURL="http://localhost:3000"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
