export default {
  path: 'seeker',
  children: [
    {
      path: '',
      name: 'seeker',
      component: () => import('@/views/seeker/index.vue')
    }
  ]
}