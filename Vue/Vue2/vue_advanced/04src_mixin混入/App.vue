<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <School></School>
    <Student></Student>
  </div>
</template>
<!-- 
  mixin(混入)
    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方式：
      第一步定义混合，例如：
        {
          data(){...},
          methods:{....}
          ...
        }
      第二部使用混入，例如：
        (1).全局混入：Vue.mix(xxx)
        (2).局部混入: mixins:['xxx']
 -->
<script>

import School from './components/school.vue'
import Student from './components/student.vue'


export default {
  name: 'App',
  components: {
    School,
    Student
  },
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
</style>
