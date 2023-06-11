<template>
    <div class="demo">
        <h3>名称：{{name}}</h3>
        <h3>地址：{{address}}</h3>
    </div>
</template>

<script>
    export default {
        name:'School',
        data(){
            return {
                name:'浙江海洋大学',
                address:'海大南路一号'
            }
        }
    }
</script>

<style scoped>
    .demo{
        background-color: aqua;
    }
</style>