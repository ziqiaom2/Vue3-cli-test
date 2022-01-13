import { onMounted } from '@vue/runtime-core';
import { reactive, ref, toRefs } from "@vue/reactivity";


export default function () {
  let todos = reactive({
    dee: [
      { id: "001", title: "Vue", done: false },
      { id: "002", title: "React", done: false },
      { id: "003", title: "Angular", done: false },
    ],
  });
  
  function deleteTodo(id) {
    // remove(todos, (n) => n.id == id);
    // 解决，可触发响应式

    todos.dee = todos.dee.filter((todo) => todo.id !== id);
    // 响应式丢失，变为普通数组，元素为proxy对象
    //即使再包一层reactive函数，依然丢失响应式
    console.log(
      "filtered",
      todos.dee.filter((todo) => todo.id !== id)
    );
    console.log("todos.dee:", todos.dee);
  }
  function startDeleteTodo() {
    todos.dee.pop();
  }
  onMounted(() => {
    if (todos) {
      setInterval(() => startDeleteTodo(), 1500);
    }
  });
}
