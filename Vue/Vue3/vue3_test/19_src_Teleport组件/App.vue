<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Child></Child>
  </div>
  
  </template>
  
  <script>
  import Child from '@/components/Child'
  export default {
    name: 'App',
    components: {
      Child
    }
  }
  </script>
  
  <style scoped>
    .app{
      background-color: #434040;
      padding: 30px;
    }
  </style>
  