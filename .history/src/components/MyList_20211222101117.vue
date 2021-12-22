
<template>
  <ul class="todo-main">
    <draggable
      chosenClass="chosen"
      forceFallback="true"
      group="people"
      animation="1000"
      @start="onStart"
      @end="onEnd"
    >
      <transition-group>
        <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
      </transition-group>
    </draggable>
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
import draggable from "vuedraggable";
import { ref } from "@vue/reactivity";
export default {
  name: "MyList",
  components: { MyItem, draggable },
  //声明接收App传递过来的数据，其中todos是自己用的，checkTodo和deleteTodo是给子组件MyItem用的
  props: ["todos"],
  // setup() {
  //   let drag = ref(false);
  //   function onStart() {
  //     drag = true;
  //   }
  //   function onEnd() {
  //     drag = false;
  //   }
  //   return {
  //     drag,
  //     onStart,
  //     onEnd,
  //   };
  // },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
.item {
  padding: 6px;
  background-color: #fdfdfd;
  border: solid 1px #eee;
  margin-bottom: 10px;
  cursor: move;
}
/*选中样式*/
.chosen {
  border: solid 2px #3089dc !important;
}
</style>