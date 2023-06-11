<template>
  <div id="app">
    <button @click="getInfo1">获取学生信息</button>
    <button @click="getInfo2">获取汽车信息</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'App',
    data(){
        return {
            
        }
    },
    methods: {
      getInfo1(){
        axios.get('http://localhost:8080/api1/students').then(
          response => {
            console.log('请求成功了', response.data);
          },
          error => {
            console.warn('请求失败了', error.message)
          }
        )
      },
      getInfo2(){
        axios.get('http://localhost:8080/api2/cars').then(
          response => {
            console.log('请求成功了', response.data);
          },
          error => {
            console.warn('请求失败了', error.message)
          }
        )
      }
    },
  }
</script>
