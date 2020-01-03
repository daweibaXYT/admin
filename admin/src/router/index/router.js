import index from './index'

export default [{
  path: '/home',
  name: 'home',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.默认的路由懒加载,可以加快首页加载速度
  component: () =>
        import (/* webpackChunkName: "about" */ '@/views/Home.vue'),
  children: index
}]
