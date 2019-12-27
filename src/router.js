import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './routerConfig'

Vue.use(Router)

const recursiveRouterFunc = () => {
  // 路由扁平化处理
  const routerMap = []

  const recursiveRouterConfig = (config = []) => {
    config.forEach((item) => {
      const route = {
        path: item.path,
        component: item.layout,
        children: [
          {
            path: '',
            component: item.component,
            name: item.name,
            redirect: item.redirect || '',
            meta: item.meta || '',
          },
        ],
      }

      if (Array.isArray(item.children)) {
        recursiveRouterConfig(item.children)
      }
      routerMap.push(route)
    })

    return routerMap
  }

  const routes = recursiveRouterConfig(routerConfig)

  return routes
}

const routerInit = (store) => {
  const router = new Router({
    mode: 'hash',
    routes: recursiveRouterFunc(),
  })

  router.beforeEach(async (to, from, next) => {
    //to and from are Route Object,next() must be called to resolve the hook}
    if (to.name) {
      const AStartType = `a_start_${to.name}`
      if (store._actions[AStartType] && store._actions[AStartType].length) {
        store.dispatch(AStartType, {
          params: to.params,
          query: to.query,
        })
      }
    }

    try {
      // do something init
      // example: store.dispatch('fetch_user_info')
    } catch (err) {
      console.log(err)
    }

    next()
  })

  return router
}

export default routerInit
