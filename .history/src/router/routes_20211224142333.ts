const routes ={
  path:'/src/pages/GreedySnake.vue',
  name:'greedy-snake',
  component: () =>
    import(/* webpackChunkName: "service-score-index" */ "@/pages"),
}
export default routes