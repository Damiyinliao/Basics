<template>
  <div id="app">
    <h3>{{msg}},{{stuName}}</h3>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父组件传递数据（第一种写法，使用@或v-on） -->
    <!-- <Student v-on:hewei="getStudentName"></Student> -->
    <!-- <Student @hewei.once="getStudentName"></Student> -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父组件传递数据（第二种写法，使用ref） -->
    <Student ref="student" @click.native="show"/>
  </div>
</template>

<script>
import School from './components/school.vue'
import Student from './components/student.vue'
export default {
  name: 'App',
  data() {
    return {
      msg:'你好!',
      stuName:''
    }
  },
  components: {
    School,
    Student
  },
  methods: {
    show(){
      alert("原生事件必须加native")
    },
    getSchoolName(name){
      console.log('SchoolName:',name);
    },
    getStudentName(name){
      console.log('StudentName:',name);
      this.stuName = name
    }
  },
  mounted(){
    this.$refs.student.$on('hewei', this.getStudentName)
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
