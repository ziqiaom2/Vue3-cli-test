const routes ={
  path:'/src/pages/GreedySnake.vue',
  name:'greedy-snake',
  component: () =>
    import(/* webpackChunkName: "service-score-index" */ "@/pages/GreedySnake"),
}
export default routes