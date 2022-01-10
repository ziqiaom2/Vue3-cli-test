<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add"
      onchange= myDebounce 
    />
  </div>
  <div>{{ computedTitle }}</div>
</template>

<script>
import { nanoid } from "nanoid";
import { ref } from "vue";
import { myDebounce } from '@rexm112/npm'
export default {
  name: "MyHeader",
  //接收从App传递过来的addTodo
  props: ["addTodo"],
  setup(props) {
    let title = ref(" ");
    let computedTitle = ref(" ");
    function showTitle (){
      computedTitle.value = title.value
    }
    myDebounce(showTitle , 500);
    

    function add() {
      //校验数据
      if (!title.value.trim()) return alert("输入不能为空");
      //将用户的输入包装成一个todo对象
      const todoObj = { id: nanoid(), title: title.value.trim(), done: false };
      //通知App组件去添加一个todo对象
      console.log("props.addTodo", props.addTodo);

      console.log("title.value", title.value);
      console.log("title.value.trim()", title.value.trim());
      props.addTodo(todoObj);

      //清空输入
      title.value = "";
    }
    console.log("title", title);
    console.log("props", props);

    return {
      title,
      add,
      computedTitle,
      showTitle
    };
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 100%;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  margin-right: 6px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>