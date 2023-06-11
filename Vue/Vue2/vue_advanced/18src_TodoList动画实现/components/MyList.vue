<template>
    <ul class="todo-main">
        <transition-group appear name="todo">
            <MyItem 
                v-for="todoObj in todos" 
                :key="todoObj.id" 
                :todo="todoObj" 
            />
        </transition-group>
        
    </ul>
</template>

<script>
    import MyItem from './MyItem.vue'
    export default {
        name: 'MyList',
        props:['todos'],
        components:{MyItem}
    }
</script>

<style>
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

    .todo-enter-active{
        animation: hewei 1s;
    }
    .todo-leave-active{
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