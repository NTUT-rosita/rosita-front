import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(
        /* webpackChunkName: "Home" */
        /* webpackPreload: true */
        "@/pages/Home.vue"
      ),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(
        /* webpackChunkName: "About" */
        /* webpackPrefetch: true */
        "@/pages/About.vue"
      ),
  },
  {
    path: "/affairs-info",
    name: "AffairsInfo",
    component: () =>
      import(
        /* webpackChunkName: "AffairsInfo" */
        /* webpackPrefetch: true */
        "@/pages/AffairsInfo.vue"
      ),
  },
  {
    path: "/chart-info",
    name: "ChartInfo",
    component: () =>
      import(
        /* webpackChunkName: "ChartInfo" */
        /* webpackPrefetch: true */
        "@/pages/ChartInfo.vue"
      ),
  },
  {
    path: "/:pathNatch(.*)*",
    redirect: "/"
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
