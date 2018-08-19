// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {
  store
} from './store'

axios.defaults.baseURL = 'http://47.104.11.100:8001/'


Vue.prototype.$axios = axios

Vue.config.productionTip = false

// 全局 自定义指令
// Vue.directive('rainbow', {
//   bind (el, binding, vnode) {
//     el.style.color = '#' + Math.random().toString(16).slice(2, 8)
//   }
// })
Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1260px'
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '560px'
    }

    if (binding.arg === 'column') {
      el.style.background = '#6677cc'
      el.style.padding = '20px'
    }
  }
})

// 全局 自定义过滤器
// Vue.filter('to-uppercase', (value) => {
//   return value.toUpperCase()
// })
Vue.filter('snippet', (value) => {
  return value.slice(0, 100) + '...'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
