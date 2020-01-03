export default [{
  path: '/feedBack/feedBack',
  name: 'feedBack',
  component: () => import(/* webpackChunkName: "about" */ '@/views/feedBack/feedBack.vue')
}]
