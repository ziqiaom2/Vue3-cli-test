<template>
    <li @click="handleCheck(todo.id)">
        <label>
            <input type="checkbox" :checked="todo.done" />
            <!-- #region -->
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <!-- #endregion -->
            <span v-show="!edited"> {{ todo.title }}</span>
            <input ref="editBox" @click="editClicked" type="text" v-if="edited" @keyup.enter="editCompleted(todo.id)()" :value="todo.title" />
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button class="btn btn-edit" @click="handleEdit(todo.id)">编辑</button>
    </li>
</template>

<script>
import { inject, reactive, ref, toRef, nextTick } from 'vue';

export default {
    name: 'MyItem',
    //声明接收todo、checkTodo、deleteTodo
    props: ['todo'],

    setup() {
        let edited = ref(false);
        const editBox = ref(null);

        let checkTodo = inject('checkTodo');
        let deleteTodo = inject('deleteTodo');
        let editTodo = inject('editTodo');
        //勾选or取消勾选
        // console.log("checkTodo", checkTodo);
        // console.log("deleteTodo", deleteTodo);
        function handleCheck(id) {
            //通知App组件将对应的todo对象的done值取反
            checkTodo(id);
        }
        //删除
        function handleDelete(id) {
            event.stopPropagation();
            if (confirm('确定删除吗？')) {
                //通知App组件将对应的todo对象删除
                deleteTodo(id);
            }
        }

        function handleEdit(id) {
            event.stopPropagation();
            console.log(id);

            edited.value = !edited.value;

            console.log(edited.value);
            console.log('editBox.value:', editBox);
            //vue 3 应使用nextTick来获取刚显示出来的input标签
            nextTick(() => editBox.value.focus());
        }
        function editClicked() {
            event.stopPropagation();
        }
        function editCompleted(id) {
            return function (value) {
                edited.value = !edited.value;
                console.log(edited.value);
                value = editBox.value.value;
                editTodo(id, value);
            };
        }
        return {
            handleCheck,
            handleDelete,
            handleEdit,
            editClicked,
            editCompleted,
            edited,
            editBox,
        };
    },
};
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    width: 4rem;
    margin-left: 0.5rem;
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}
</style>