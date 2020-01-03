export default [{
  path: '/visitedManagement/interrogationRecord',
  name: 'interrogationRecord',
  component: () => import(/* webpackChunkName: "about" */ '@/views/visitedManagement/interrogationRecord.vue')
}, {
  path: '/visitedManagement/visitedManagement',
  name: 'visitedManagement',
  component: () => import(/* webpackChunkName: "about" */ '@/views/visitedManagement/visitedManagement.vue')
}]
