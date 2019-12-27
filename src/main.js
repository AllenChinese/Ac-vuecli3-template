import Vue from 'vue'
import App from './App.vue'
import routerInit from './router'
import store from './store'
import './elementConfig'
import 'normalize.css/normalize.css'
import './styles/index.scss'
import './components/Base/global.js'

Vue.config.productionTip = false

new Vue({
  router: routerInit(store),
  store,
  render: (h) => h(App),
}).$mount('#app')
