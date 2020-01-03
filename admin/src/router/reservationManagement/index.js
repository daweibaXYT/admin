export default [{
  path: '/reservationManagement/reservationRecord',
  name: 'reservationRecord',
  component: () => import(/* webpackChunkName: "about" */ '@/views/reservationManagement/reservationRecord.vue')
}, {
  path: '/reservationManagement/reservationRegister',
  name: 'reservationRegister',
  component: () => import(/* webpackChunkName: "about" */ '@/views/reservationManagement/reservationRegister.vue')
}]
