<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <School></School>
    <Student></Student>
  </div>
</template>
<!-- 
  scoped样式
      作用：让样式在局部生效，防止冲突。
      写法：<style scoped>
 -->
<script>
import School from './components/school.vue'
import Student from './components/student.vue'
export default {
  name: 'App',
  components: {
    School,
    Student
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
</style>
