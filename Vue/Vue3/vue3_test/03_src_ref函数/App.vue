<template>
  <div class="content">
    <h1>我是App组件</h1>
    <h2>姓名：{{ name }}，年龄：{{ age }}</h2>
    <h2>类型：{{ job.type }}，{{ job.salary }}</h2>
    <hr>
    <button @click="changeInfo">改变信息</button>
  </div>
</template>

<script>

import { ref } from "vue"
export default {

  name: 'App',
  setup() {
    //数据
    let name = ref("He");
    let age = ref(23);
    let job = ref({
      type:"前端工程师",
      salary:"12k"
    })
    //方法
    //改变属性值
    function changeInfo(){
      name.value = "Lan";
      age.value = 22;
      job.value.type = "后端开发工程师";
      job.value.salary = "15K"
    };
    // 返回一个对象
    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
