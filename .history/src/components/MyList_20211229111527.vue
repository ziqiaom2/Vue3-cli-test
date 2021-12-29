<template>
  <ul class="todo-main">
    <!-- <draggable
      class="dragArea list-group w-full"
      :todos="todos"
      @change="log"
      @end="dragEnd(todos.indexOf(todoObj))"
    >-->
    <MyItem
      :draggable="true"
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
      console.log("dragEnd index:", index);
    }

    oldData: any = null; // 开始排序时按住的旧数据
    newData: any = null; // 拖拽过程的数据

    // 列表数据

    dragstart(value: any) {
      this.oldData = value
    }

    // 记录移动过程中信息
    dragenter(value: any, e: any) {
      this.newData = value
      e.preventDefault()
    }

    // 拖拽最终操作
    dragend(value: any, e: any) {
      if (this.oldData !== this.newData) {
        let oldIndex = this.dataList.indexOf(this.oldData)
        let newIndex = this.dataList.indexOf(this.newData)
        let newItems = [...this.dataList]
        // 删除老的节点
        newItems.splice(oldIndex, 1)
        // 在列表中目标位置增加新的节点
        newItems.splice(newIndex, 0, this.oldData)
        this.dataList = [...newItems]
      }
    }


    // 拖动事件（主要是为了拖动时鼠标光标不变为禁止）
    dragover(e: any) {
      e.preventDefault()
    }



    作者：凯哥爱吃皮皮虾
    链接：https://juejin.cn/post/7027022754943598599
    来源：稀土掘金
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



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