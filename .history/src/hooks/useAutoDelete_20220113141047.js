import { onMounted,onUnmounted } from "@vue/runtime-core";
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
    todos.dee = todos.dee.filter((todo) => todo.id !== id);

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
      setInterval(() => startDeleteTodo(), 1000);
    }
  });
  onUnmounted(() => {
    clearInterval()
  })
  return {
    ...toRefs(todos),

    deleteTodo,
    startDeleteTodo,
  };
}
