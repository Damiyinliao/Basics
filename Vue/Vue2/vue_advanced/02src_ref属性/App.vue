<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2 v-text="msg" ref="title"></h2>
    <button @click="showRef">点击打印</button>
    <School ref="sch"></School>
    <Student ref="stu"></Student>
  </div>
</template>
<!-- 
  ref属性
  1.被用来给元素或子组件注册引用信息（id的替代者）
  2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)
  3.使用方式：
      打标识：<h1 ref="xxx">...</h1> 或 <School ref="xxx"></School>
      获取：this.$refs.xxx
 -->
<script>

import School from './components/school.vue'
import Student from './components/student.vue'
export default {
  name: 'App',
  data() {
    return {
      msg: '欢迎来到Vue!'
    }
  },
  components: {
    School,
    Student
  },
  methods: {
    showRef(){
      console.log(this.$refs.title);  //获取真实DOM元素
      console.log(this.$refs.sch);    //获取School组件的实例对象
      console.log(this.$refs.stu);    //获取Student组件的实例对象
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
</style>
