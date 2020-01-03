import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login.vue'
import Home from '@/views/Home.vue'

Vue.use(Router)

const IndexRoute = {
  path: '/',
  component: Home,
  redirect: '/login',
  children: []
}
let routes = [
  IndexRoute,
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login.vue')
  }
]

const routerContext = require.context('./', true, /router\.js$/)
routerContext.keys().forEach(route => {
  // 如果是根目录的 index.js 、不处理
  if (route.startsWith('./router')) {
    return
  }
  const routerModule = routerContext(route)
  /**
         * 兼容 import export 和 require module.export 两种规范
         */
  routes = [...routes, ...(routerModule.default || routerModule)]
})
console.log(login)
export default new Router({
  routes: routes
})
