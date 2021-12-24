const routes = [
  {
    path: "/src/pages/GreedySnake.vue",
    name: "greedy-snake",
    component: () => import(/* webpackChunkName: "greedy-snake" */ "@/pages"),
  },
];
export default routes;
