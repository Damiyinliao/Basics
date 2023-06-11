<template>
  <div id="app">
    <h3>{{msg}},{{stuName}}</h3>
    <School/>
    <Student/>
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
