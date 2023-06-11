import Vue from 'vue'
import App from './App.vue'

//引入store
import store from './store'

Vue.config.productionTip = false

// 导入vue-resource用来发请求
import vueResource from 'vue-resource'
// 全局使用
Vue.use(vueResource)


new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  
}).$mount('#app')
