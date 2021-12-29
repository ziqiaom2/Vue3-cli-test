<template>
  <ul class="todo-main">
    <!-- <draggable
      class="dragArea list-group w-full"
      :todos="todos"
      @change="log"
      @end="dragEnd(todos.indexOf(todoObj))"
    > -->
      <MyItem draggable="true"
        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
        v-for="todoObj in todos"
        :key="todoObj.id"
        :todo="todoObj"
      />
    <!-- </draggable> -->
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
import { VueDraggableNext } from "vue-draggable-next";
export default {
  name: "MyList",
  //draggable: VueDraggableNext
  components: { MyItem },
  
  //声明接收App传递过来的数据，其中todos是自己用的，checkTodo和deleteTodo是给子组件MyItem用的
  props: ["todos"],
  setup() {
    function dragEnd(index) {
      console.log("dragEnd index:",index);
    }
    return {
      dragEnd
    }
  }

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