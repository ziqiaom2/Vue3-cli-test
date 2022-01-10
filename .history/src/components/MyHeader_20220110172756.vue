<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add"
      @input="myDebounce(() => {computedTitle = title})"
    />
  </div>
  <div>{{ computedTitle }}</div>
</template>

<script>
import { nanoid } from "nanoid";
import { ref } from "vue";

export default {
  name: "MyHeader",
  //接收从App传递过来的addTodo
  props: ["addTodo"],
  setup(props) {
    let title = ref(" ");
    let computedTitle = ref(" ");
    function showTitle() {
      myDebounce(() => {computedTitle.value = title.value}, 1000)
      // setTimeout(() => computedTitle.value = title.value,1000);
      console.log('showTitle is triggered')
      // myDebounce(() => console.log('Debounced'))

    }
    function myDebounce(func, wait = 1000) {
      let timer = null

      return function() {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          func()
          timer = null

        }, wait);
      }


    }

    // function myDebounce(func, wait = 1000, immediate = true) {
    //   let timer
    //   // 延迟执行函数
    //   const later = () =>
    //     setTimeout(() => {
    //       // 延迟函数执行完毕，清空缓存的定时器序号
    //       timer = null;
    //       // 延迟执行的情况下，函数会在延迟函数中执行
    //       // 使用到之前缓存的参数和上下文

    //         func()


    //     }, wait);

    //   // 这里返回的函数是每次实际调用的函数
    //   return ()=> {
    //     // 如果没有创建延迟执行函数（later），就创建一个
    //     if (!timer) {
    //       timer = later();
    //       // 如果是立即执行，调用函数
    //       // 否则缓存参数和调用上下文
    //       if (immediate) {
    //         func();
    //       }
    //       // 如果已有延迟执行函数（later），调用的时候清除原来的并重新设定一个
    //       // 这样做延迟函数会重新计时
    //     } else {
    //       clearTimeout(timer);
    //       timer = later();
    //     }
    //   };
    // }





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
      showTitle,
      myDebounce

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