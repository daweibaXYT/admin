export default [{
  path: '/contentManagement/healthScience',
  name: 'healthScience',
  component: () => import(/* webpackChunkName: "about" */ '@/views/contentManagement/healthScience.vue')
}, {
  path: '/contentManagement/homeSlide',
  name: 'homeSlide',
  component: () => import(/* webpackChunkName: "about" */ '@/views/contentManagement/homeSlide.vue')
}, {
  path: '/contentManagement/hospitalNotice',
  name: 'hospitalNotice',
  component: () => import(/* webpackChunkName: "about" */ '@/views/contentManagement/hospitalNotice.vue')
}, {
  path: '/contentManagement/editor',
  name: 'editor',
  component: () => import(/* webpackChunkName: "about" */ '@/views/contentManagement/editor.vue')
}]
