<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <School></School>
    <Student name="何伟" address="浙江海洋大学" :age="18"></Student>
  </div>
</template>
<!-- 
  配置项props
    功能：让组件接受外部过来的数据
      (1).传递数据：
        <Demo name="xxx"/>
      (2).接收数据：
        第一种方式（只接收）：
          props:['name']
        第二种方式(限制类型):
          props:{
            name:Number
          }
        第三种方式(限制类型、限制必要性、指定默认值)
          props:{
            name:{
              type:String,  //类型
              required:true //必要性
              default:'老王' //默认值
            }
          }
    备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
          若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

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
