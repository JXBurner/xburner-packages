/*
 * @Author: jinx
 * @Date: 2021-11-09 14:53:54
 * @LastEditors: jinx
 * @Descripttion: 文件描述
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import '@/assets/styles/element-variables.scss'

Vue.use(ElementUI)
// import xburnertable from 'xburnertable'
// Vue.use(xburnertable)
import xBurnerTable from './packages/index'
Vue.use(xBurnerTable)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
