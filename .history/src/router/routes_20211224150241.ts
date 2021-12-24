import { RouteRecordRaw } from "vue-router";

const routes :Array<RouteRecordRaw>= [
  {
    path: "../src/pages/GreedySnake.vue",
    name: "greedysnake",
    component: GreedySnake,
    //  () => import(/* webpackChunkName: "greedy-snake" */ "@/pages"),
  },
];
export default routes;
