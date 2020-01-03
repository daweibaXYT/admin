export default [{
  path: '/userManagement/usersList',
  name: 'usersList',
  component: () => import(/* webpackChunkName: "about" */ '@/views/userManagement/usersList.vue')
}, {
  path: '/userManagement/patientsList',
  name: 'patientsList',
  component: () => import(/* webpackChunkName: "about" */ '@/views/userManagement/patientsList.vue')
}]
