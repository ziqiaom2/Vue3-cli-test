import { onMounted } from '@vue/runtime-core';


export default function () {
  function startDeleteTodo() {
    todos.dee.pop();
  }
  onMounted(() => {
    if (todos) {
      setInterval(() => startDeleteTodo(), 1500);
    }
  });
}
