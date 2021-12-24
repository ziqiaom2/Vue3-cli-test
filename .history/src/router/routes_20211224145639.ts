import { RouteRecordRaw } from "vue-router";

const routes :Array<RouteRecordRaw>= [
  {
    path: "/src/pages/GreedySnake",
    name: "GreedySnake",
    component: GreedySnake
    //  () => import(/* webpackChunkName: "greedy-snake" */ "@/pages"),
  },
];
export default routes;
