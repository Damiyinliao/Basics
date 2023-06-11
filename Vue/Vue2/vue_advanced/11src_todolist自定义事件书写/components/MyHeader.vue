<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title"/>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
    export default {
        name:'MyHeader',
        //采用自定义事件就不需要使用props接收了
        // props:['addTodo'],
        data(){
            return {
                title:''
            }
        },
        methods:{
            add(){
                //当输入框为空时，按回车键还是会继续增加todo，需要设置判断 当this.title为空时就return
                if(!this.title.trim()) return alert("输入不能为空！")
                // 将用户的输入包装成一个todo对象
                const todoObj = {id:nanoid(),title:this.title,done:false}
                // //在App.vue里创建一个函数receive，使用props将函数传到header里面，最后在header里面调用这个函数将todoObj又传回Vue里面
                // this.addTodo(todoObj);

                // 自定义事件书写 emit触发
                this.$emit('addTodo', todoObj,1,2,3)




                this.title = ''
            }
        }
    }
</script>
<style scoped>
        /*header*/
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }
    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }

</style>