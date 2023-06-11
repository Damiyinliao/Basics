<template>
    <!-- <transition appear name="todo"> -->
        <li>
            <label>
            <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
            <!-- <input type="checkbox" v-model="todo.done"> -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
                type="text"
                v-show="todo.isEdit"
                :value="todo.title"
                @blur="handleBlur(todo, $event)"
                ref="inputTitle"
            />
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
            <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
        </li>
    <!-- </transition> -->
   

</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name: 'MyItem',
        data(){
            return {

            }
        },
        props:['todo'],
        methods:{
            // 勾选 or 取消勾选
            handleCheck(id){
                // 通知App组件将todo.done取反
                // this.checkTodo(id)
                this.$bus.$emit('checkTodo',id)
            },
            // 删除item
            handleDelete(id){
                if(confirm('确定删除吗')){
                    // console.log(id);
                    // this.deleteTodo(id)
                    // this.$bus.$emit('deleteTodo',id)
                    //发布消息
                    pubsub.publish('deleteTodo', id)
                }
            },
            // 编辑item
            handleEdit(todo){
                if(Object.prototype.hasOwnProperty.call(todo, 'isEdit')){
                    todo.isEdit = true
                }else{
                    this.$set(todo, 'isEdit', true)
                }
                // $nextTick属性 DOM更新之后再执行
                this.$nextTick(function(){
                    this.$refs.inputTitle.focus()
                })
               
            },
            //失去焦点回调（真正执行修改逻辑）
            handleBlur(todo, e){
                todo.isEdit = false
                if(!e.target.value.trim()) return alert('输入不能为空')
                this.$bus.$emit('updateTodo', todo.id, e.target.value)
            }
        }
    }
</script>

<style>
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
    
    li:hover button{
        display: block;
    }
    .btn-edit{
        color: #fff;
        background-color: skyblue;
        border: 1px solid rgb(83, 131, 150);
        margin-right: 5px;
    }
    .v-enter-active{
        animation: hewei 1s;
    }
    .v-leave-active{
        animation: hewei 1s reverse;
    }
    @keyframes hewei {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>