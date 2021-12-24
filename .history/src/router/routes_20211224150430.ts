import { RouteRecordRaw } from "vue-router";

const routes :Array<RouteRecordRaw>= [
  {
    path: "/greedysnake",
    name: "greedysnake",
    component: 
     () => import(/* webpackChunkName: "greedy-snake" */ "../pages/GreedySnake.vue"),
  },
];
export default routes;
