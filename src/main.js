import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './elementConfig';
import 'normalize.css/normalize.css';
import './styles/index.scss';

Vue.config.productionTip = false;

// 路由拦截
// router.beforeEach((to, from, next) => {
//   // 登录验证
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
