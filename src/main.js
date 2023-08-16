import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'//新增
import './plugins/element.js'
import 'normalize.css'
import '@/assets/css/base.css'
Vue.config.productionTip = false

new Vue({
  router,//新增
  render: h => h(App),
}).$mount('#app')
