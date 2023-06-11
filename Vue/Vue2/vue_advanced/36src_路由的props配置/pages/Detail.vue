<template>
    <div>
        <ul>
            <li>消息编号：{{$route.params.id}}</li>
            <li>消息标题：{{$route.params.title}}</li>
            <li>{{id}}</li>
            <li>{{title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Detail',
        data() {
            return {
                
            }
        },
        // props:['a','b'],  //第一种写法接收到的参数
        props:['id','title'],
        mounted(){
            console.log('Detail',this.$route.params);
        }

    }
</script>

<style>

</style>