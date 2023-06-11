<template>
  <div class="child">
    <h3>我是Child组件</h3>
    <h3>{{ p }}</h3>
  </div>
</template>

<script>
    import { ref } from 'vue'
    export default {
        name: 'Child',
        //父组件使用了Suspense异步引入
       async setup(){
        let sum = ref(0);
        let p = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve({sum})
            }, 2000)
        });
        return await p
       }
    }
</script>

<style scoped>
    .child{
        background-color: bisque;
        padding: 30px;
    }
</style>