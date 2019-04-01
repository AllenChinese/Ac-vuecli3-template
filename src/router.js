import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from './routerConfig';
// 路由扁平化处理
const routerMap = [];

const recursiveRouterConfig = (config = []) => {
  config.forEach((item) => {
    const route = {
      path: item.path,
      component: item.layout,
      children: [
        {
          path: '',
          component: item.component,
          name: item.name
        },
      ],
    };

    if (Array.isArray(item.children)) {
      recursiveRouterConfig(item.children);
    }
    routerMap.push(route);
  });

  return routerMap;
};

const routes = recursiveRouterConfig(routerConfig);

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes
})