<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <span>{{ todo.title }}</span>
      <button @click="deleteTodo(todo.id)">删除</button>
    </li>
  </ul>
</template>

<script>
import remove from "lodash/remove";
import { reactive } from "@vue/reactivity";
export default {
  name: "App",
  components: {},
  setup() {
    let todos = reactive([
      { id: "001", title: "Vue", done: false },
      { id: "002", title: "React", done: false },
      { id: "003", title: "Angular", done: false },
    ]);

    function deleteTodo(id) {
      // remove(todos, (n) => n.id == id);
      // 可触发响应式

      todos = reactive(todos.filter((todo) => todo.id !== id))
      // 响应式丢失，变为普通数组，元素为proxy对象

      console.log("todos:", todos);
    }

    return {
      todos,

      deleteTodo,
    };
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

