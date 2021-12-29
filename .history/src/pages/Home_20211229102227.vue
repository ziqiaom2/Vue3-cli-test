/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
<template>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0" />
    <MyHeader :addTodo="addTodo" />
    <MyList :todos="todos" />
    <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo" />
    <Test></Test>
    <div @click="toGreedySnake">贪吃蛇</div>
</template>

<script>
import remove from 'lodash/remove';
import { provide } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';
import MyHeader from '../components/MyHeader.vue';
import MyList from '../components/MyList.vue';
import MyFooter from '../components/MyFooter.vue';
import Test from '@/components/Test.vue';
import { reactive, toRefs } from '@vue/reactivity';
import { useRouter } from 'vue-router';
export default {
    name: 'Home',
    components: {
        HelloWorld,
        MyHeader,
        MyList,
        MyFooter,
        Test,
    },
    setup() {
        let data = reactive({
            todos:
                //由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
                [
                    { id: '001', title: 'Vue', done: false },
                    { id: '002', title: 'React', done: false },
                    { id: '003', title: 'Angular', done: false },
                ],
        });

        //添加一个todo
        function addTodo(todoObj) {
            data.todos.unshift(todoObj);
            // todos[0]={ id: "00123", title: "开", done: false }
            //vue3只解决了索引值方式修改数组和对象的问题，反而失去了arr= newarr 赋值形式的响应式
            console.log('todos', data.todos);
        }
        //勾选or取消勾选一个todo
        function checkTodo(id) {
            data.todos.forEach((todo) => {
                if (todo.id === id) todo.done = !todo.done;
            });
        }
        //删除一个todo
        function deleteTodo(id) {
            // for (let i in todos){
            //   if (todos[i].id == id ){
            //     todos.splice(i,1)
            //   }
            // }
            // remove(data.todos, (n) => n.id == id);
            // todos.map((i,index) =>{
            //   if (i.id == id ){
            //     todos.splice(index,1)}})
            data.todos = data.todos.filter((todo) => todo.id !== id);
            //不能用赋值的方式修改reactive响应式数组
            // todos.shift()

            console.log('data.todos', data.todos);
        }
        //全选or取消全选
        function checkAllTodo(done) {
            data.todos.forEach((todo) => {
                todo.done = done;
            });
        }
        //清除所有已经完成的todo
        function clearAllTodo() {
            data.todos = data.todos.filter((todo) => {
                return !todo.done;
            });
            // todos.map((i,index) => {
            //   if(i.done){ todos.splice(index,1)

            //   };
            // });
            // remove(data.todos, (n) => n.done == true);
            console.log('data.todos', data.todos);
        }
        function editTodo(id, value) {
            data.todos.forEach((todo) => {
                if (todo.id === id) {
                    todo.title = value;
                }
            });
        }

        provide('checkTodo', checkTodo);
        provide('deleteTodo', deleteTodo);
        provide('editTodo', editTodo);

        console.log('todos.length', data.todos.length);
        // console.log("arr", arr);
        console.log('addTodo', addTodo);
        const router = useRouter();
        function toGreedySnake() {
            router.push({ name: 'greedysnake' });
        }
        return {
            ...toRefs(data),
            addTodo,
            checkTodo,
            deleteTodo,
            checkAllTodo,
            clearAllTodo,
            toGreedySnake,
            editTodo,
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
.btn-edit {
    color: #fff;
    background-color: #55da49;
    border: 1px solid #40bd2f;
}
.btn-edit:hover {
    color: #fff;
    background-color: #195511;
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

