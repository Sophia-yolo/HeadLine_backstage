import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入Element-UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/style.less'
import * as echarts from 'echarts'

Vue.prototype.$echarts = echarts

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
