import { RouteRecordRaw } from 'vue-router'
import { RouterOptions } from 'vite-ssg'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(
        '@/pages/Home.vue'
      )
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(
        '@/pages/About.vue'
      )
  },
  {
    path: '/affairs-info',
    name: 'AffairsInfo',
    component: () =>
      import(
        '@/pages/AffairsInfo.vue'
      )
  },
  {
    path: '/chart-info',
    name: 'ChartInfo',
    component: () =>
      import(
        '@/pages/ChartInfo.vue'
      )
  },
  {
    path: '/:pathNatch(.*)*',
    name: 'NotFound',
    redirect: '/'
  }
]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

export const routerOptions: RouterOptions = {
  routes
}
