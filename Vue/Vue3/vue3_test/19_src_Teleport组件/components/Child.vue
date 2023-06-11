<template>
  <div class="child">
    我是父组件
    <Grandson></Grandson>
  </div>
</template>

<script>
    import Grandson from './Grandson.vue';
    export default {
        components:{
            Grandson
        }
    }
</script>

<style scoped>
    .child{
        background-color: bisque;
        padding: 30px;
    }
</style>