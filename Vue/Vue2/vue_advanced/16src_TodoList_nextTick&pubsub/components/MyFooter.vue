<template>
    <div class="todo-footer" v-show="total">
        <label>
          <!-- 第一种办法 -->
          <!-- <input type="checkbox" :checked="isAll" @click="checkAll"/> -->
          <!-- 第二种办法 -->
          <input type="checkbox" v-model="isAll" />
        </label>
        <span>
          <span>已完成{{doneTotal}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>

    export default {
        name: 'MyFooter',
        // props:['todos','checkAllTodo','clearAllTodo'],
        //采用自定义事件 不接受checkAllTodo clearAllTodo
        props:['todos'],
        computed:{
            total(){
                return this.todos.length
            },
            /*
                const x = this.todos.reduce((pre, current)=>{
                    console.log('@', pre, current)
                    return pre + (current.done ? 1 : 0)
                }, 0)
            */
           //统计被勾选上的个数
            doneTotal(){
                return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
            },
            isAll:{
                get(){
                    return this.total === this.doneTotal && this.total > 0
                },
                set(value){
                    // this.checkAllTodo(value)
                    //采用自定义事件书写
                    this.$emit('checkAllTodo', value)
                }
            }
        },
        methods:{
            // checkAll(e){
            //     this.checkAllTodo(e.target.checked)
            // }
            clearAll(){
                // this.clearAllTodo()
                //采用自定义事件书写
                this.$emit('clearAllTodo')
            }
        }
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }

</style>