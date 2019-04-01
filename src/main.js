import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import './styles/index.scss'

Vue.use(ElementUI)
Vue.config.productionTip = false
// 路由拦截
// router.beforeEach((to, from, next) => {
//   // 登录验证
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
