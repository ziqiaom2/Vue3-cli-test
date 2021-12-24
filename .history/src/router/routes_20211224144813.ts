const routes = [
  {
    path: "/src/pages/GreedySnake.vue",
    name: "greedy-snake",
    component: () => import("src/pages"),
  },
];
export default routes;
