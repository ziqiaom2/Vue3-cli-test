<template>
  <h1>贪吃蛇</h1>
  <div class="init">
    <div id="main">
      <div id="stage">
        <div id="snake">
          <!--snake内部的div 表示蛇的各部分-->
          <div></div>
        </div>

        <!--设置食物-->
        <div id="food">
          <!--添加四个小div 来设置食物的样式-->
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <!--设置游戏的积分牌-->
      <div id="score-panel">
        <div>SCORE:<span id="score">0</span></div>
        <div>level:<span id="level">1</span></div>
      </div>
    </div>
    <button @click="toTest">测试</button>
  </div>
</template>

<script>
import Food from "@/GreedySnake/Food";
import ScorePanel from "@/GreedySnake/ScorePanel";

export default {
  name: "GreedySnake",
  setup() {
    function toTest() {
      const food = new Food();
      console.log(food.X, food.Y);
      food.change();
      console.log(food.X, food.Y);
    }
      // const scorePanel = new ScorePanel(100, 2);
      // scorePanel.addScore()
      return {
        toTest,
      };
    }
  }
</script>

<style lang="less" src='../GreedySnake/index.less' scoped>
</style>