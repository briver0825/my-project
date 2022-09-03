export default {
  path: 'home',
  children: [
    {
      path: '',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    }
  ]
}