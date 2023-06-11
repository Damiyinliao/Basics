<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <School></School>
    <Student></Student>
  </div>
</template>

<!-- 
  插件：
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据
    定义插件：
      对象.install = function (Vue, option) {
        //1.添加全局过滤器
        Vue.filter(...)

        //2.添加全局指令
        Vue.directive(...)

        //3.配置全局混入（合）
        Vue.mixin(...)

        //4.添加实例方法
        Vue.prototype.$myMethod = function(){...}
        Vue.prototype.$myProperty = xxx
      }
    使用插件： Vue.use()
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
