export default [{
  path: '/infoMain/hospitalInfo',
  name: 'hospitalInfo',
  component: () => import(/* webpackChunkName: "about" */ '@/views/infoMain/hospitalInfo.vue')
}, {
  path: '/infoMain/departmentInfo',
  name: 'departmentInfo',
  component: () => import(/* webpackChunkName: "about" */ '@/views/infoMain/departmentInfo.vue')
}, {
  path: '/infoMain/doctorInfo',
  name: 'doctorInfo',
  component: () => import(/* webpackChunkName: "about" */ '@/views/infoMain/doctorInfo.vue')
}]
