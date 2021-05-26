import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  echarts from 'echarts'
import VueAnimateNumber from 'vue-animate-number'
// import echartsGL from 'echarts-gl' // 引入echarts
import 'echarts/map/js/china'

import './utils/rem'
import '@/style/bootstrap.css';
import '@/style/base.css';
import '@/style/index.css';

Vue.use(VueAnimateNumber)
Vue.prototype.$echarts = echarts
// Vue.prototype.$echartsGL = echartsGL // 引入组件（将echarts注册为全局）

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
