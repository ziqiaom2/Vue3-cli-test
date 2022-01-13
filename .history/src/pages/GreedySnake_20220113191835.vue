<template>
  <h1>贪吃蛇</h1>
  <button @click="backToHome">返回</button>
  <div class="init">
    <div id="main">
      <div id="stage">
        <div id="snake">
          <!--snake内部的div 表示蛇的各部分-->
          <div></div>
          <div></div>
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
        <div>
          SCORE:
          <span id="score">0</span>
        </div>
        <div>
          level:
          <span id="level">1</span>
        </div>
      </div>
    </div>
    <button @click="toTest">测试</button>
  </div>
</template>

<script>
import GameControl from "@/GreedySnake/GameControl";
import snake from "../GreedySnake/Snake";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import Snake from "../GreedySnake/Snake";

export default {
  name: "GreedySnake",
  setup() {
    const router = useRouter();
    function toTest() {
      new GameControl();
    }
    function backToHome() {
      // router.push({name:'home'})
      router.back();
    }
    // const scorePanel = new ScorePanel(100, 2);
    // scorePanel.addScore()
    return {
      toTest,
      backToHome,
    };
  },
};
</script>

<style lang="less" src="../GreedySnake/index.less"></style>
