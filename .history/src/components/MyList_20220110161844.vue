<template>
  <ul class="todo-main">
    

    <MyItem
      :draggable="true"
      @dragenter="dragenter($event, index)"
      @dragover="dragover($event, index)"
      @dragstart="dragstart(index)"
      class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todo="todoObj"
    />

  </ul>
</template>

<script >
import MyItem from "./MyItem.vue";
import { VueDraggableNext } from "vue-draggable-next";
import { ref } from '@vue/reactivity';
export default {
  name: "MyList",
  //draggable: VueDraggableNext
  components: { MyItem },

  //声明接收App传递过来的数据，其中todos是自己用的，checkTodo和deleteTodo是给子组件MyItem用的
  props: ["todos"],
  setup(props){

    let dragIndex = ref('')
    let enterIndex = ref('')
    function dragstart(index) {
      dragIndex = index;
    }
    function dragenter(e, index) {
      e.preventDefault();
      // 避免源对象触发自身的dragenter事件
      if (dragIndex !== index) {
        const source = props.todos[dragIndex];
        // props.todos.splice(dragIndex, 1);
        // props.todos.splice(index, 0, source);
        // 排序变化后目标对象的索引变成源对象的索引
        this.dragIndex = index;
      }
    }
    function dragover(e, index) {
      e.preventDefault();
    }
    return{
      dragIndex,
      enterIndex,
      dragstart,
      dragenter,
      dragover
    }

  }
  // setup(props) {
  //   function dragEnd(index) {
  //     console.log("dragEnd index:", index);
  //   }

  //   let oldData: any = ref(null); // 开始排序时按住的旧数据
  //   let newData: any = ref(null); // 拖拽过程的数据

  //   // 列表数据

  //   ondragstart(value: any) {
  //     oldData = value
  //   }

  //   // 记录移动过程中信息
  //   ondragenter(value: any, e: any) {
  //     newData = value
  //     e.preventDefault()
  //   }

  //   // 拖拽最终操作
  //   dragEnd(value: any, e: any) {
  //     if (oldData !== newData) {
  //       let oldIndex = props.todos.indexOf(oldData)
  //       let newIndex = props.todos.indexOf(newData)
  //       let newItems = [...props.todos]
  //       // 删除老的节点
  //       newItems.splice(oldIndex, 1)
  //       // 在列表中目标位置增加新的节点
  //       newItems.splice(newIndex, 0, oldData)
  //       props.todos = [...newItems]
  //     }
  //   }


  //   // 拖动事件（主要是为了拖动时鼠标光标不变为禁止）
  //   dragover(e: any) {
  //     e.preventDefault()
  //   }




  //   return {
  //     dragEnd
  //   }
  // }


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