<template>
  
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <span>{{todo.title}}</span>
      <button @click="deleteTodo(todo.id)">删除</button>
    </li>
  </ul>
  
</template>

<script>
import remove from "lodash/remove";
import { reactive } from "@vue/reactivity";
export default {
  name: "App",
  components: {
  },
  setup() {
    let todos = reactive(
      //由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
      [
        { id: "001", title: "Vue", done: false },
        { id: "002", title: "React", done: false },
        { id: "003", title: "Angular", done: false },
      ]
    );

    function deleteTodo(id) {
      // for (let i in todos){
      //   if (todos[i].id == id ){
      //     todos.splice(i,1)
      //   }
      // }
      remove(todos, (n) => n.id == id);
      // todos.map((i,index) =>{
      //   if (i.id == id ){
      //     todos.splice(index,1)}})
      // todos = todos.filter((todo) => todo.id !== id);
      // 不能用赋值的方式修改reactive响应式数组
      // todos.shift()

      console.log("todos:", todos);
    }
    //全选or取消全选
    //清除所有已经完成的todo

    
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

