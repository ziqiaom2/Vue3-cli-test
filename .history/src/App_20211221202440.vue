<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0" />
  <MyHeader :addTodo="addTodo" />
  <MyList :todos="todos" />
  <MyFooter
    :todos="todos"
    :checkAllTodo="checkAllTodo"
    :clearAllTodo="clearAllTodo"
  />
</template>

<script>
import { provide } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
import { reactive } from "@vue/reactivity";
export default {
  name: "App",
  components: {
    HelloWorld,
    MyHeader,
    MyList,
    MyFooter,
  },
  setup() {
    let todos = reactive(
      //由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
      [
        { id: "001", title: "抽烟", done: false },
        { id: "002", title: "喝酒", done: false },
        { id: "003", title: "开车", done: false },
      ]
    );
    let arr = reactive([1, 2, 3]);

    //添加一个todo
    function addTodo(todoObj) {
      todos.unshift(todoObj);
      console.log("todos", todos);
    }
    //勾选or取消勾选一个todo
    function checkTodo(id) {
      todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    }
    //删除一个todo
    function deleteTodo(id) {
      todos = todos.filter((todo) => todo.id !== id);
    }
    //全选or取消全选
    function checkAllTodo(done) {
      todos.forEach((todo) => {
        todo.done = done;
      });
    }
    //清除所有已经完成的todo
    function clearAllTodo() {
      todos = todos.filter((todo) => {
        return !todo.done;
      });
      console.log("todos", todos)
    }
    provide("checkTodo", checkTodo);
    provide("deleteTodo", deleteTodo);
    console.log("todos.length", todos.length);
    // console.log("arr", arr);
    console.log("addTodo", addTodo);
    return {
      todos,
      arr,
      addTodo,
      checkTodo,
      deleteTodo,
      checkAllTodo,
      clearAllTodo,
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

