import Layout from '@/layouts/index.vue'
import modulesRoutes from './modules'


// 不依赖 layout 的页面
// 比如 login 
const constantRoutes = [
]

export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    // modulesRoutes 依赖于 layout 的页面
    children: modulesRoutes
  },
  // modules routes
  ...constantRoutes
]