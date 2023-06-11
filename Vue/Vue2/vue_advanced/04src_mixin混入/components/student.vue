<template>
  <div>
    <h3>名称：{{name}}</h3>
    <h3>地址：{{address}}</h3>
    <button @click="showName">打印名字</button>
  </div>
</template>

<script>
// import {mixin} from '../mixin.js'
export default {
    name:'Student',
    data(){
        return {
            name:'何伟',
            address:'海大南路一号'
        }
    },
    // mixins:[mixin]
}
</script>

<style>

</style>