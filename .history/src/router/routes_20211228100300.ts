import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/greedysnake",
    name: "greedysnake",
    component: () =>
      import(/* webpackChunkName: "greedy-snake" */ "../pages/GreedySnake.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "Home" */ "../pages/Home.vue"),
    meta: { keepAlive: true },
  },
];
export default routes;
