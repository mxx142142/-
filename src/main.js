import Vue from 'vue'
import App from './App.vue'

// 日志的详细与否 生产日志

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
// main.js入口文件
// 职责.做全局范围内的依赖和配置
// 创建一个根vue实例
