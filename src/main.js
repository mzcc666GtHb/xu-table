import Vue from 'vue'
import App from './App.vue'
import vueScroll from 'vuescroll'
Vue.use(vueScroll)

new Vue({
  el: '#app',
  render: h => h(App)
})
