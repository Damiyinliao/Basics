<template>
  <div class="child">
    我是父组件{{ info }}
    <Grandson></Grandson>
  </div>
</template>

<script>
    import Grandson from './Grandson.vue';
    import { inject } from 'vue'
    export default {
        components:{
            Grandson
        },
        setup(){
            let info = inject('info');
            return {
                info
            }
        }
    }
</script>

<style scoped>
    .child{
        background-color: bisque;
        padding: 30px;
    }
</style>