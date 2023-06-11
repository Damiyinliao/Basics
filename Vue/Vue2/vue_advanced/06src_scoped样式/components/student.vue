<template>
  <div class="demo">
    <h3>名称：{{name}}</h3>
    <h3>地址：{{address}}</h3>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            name:'何伟',
            address:'海大南路一号'
        }
    }
}
</script>
<!-- 如果样式名一样 不加scoped将会导致其它组件用同一个样式效果 -->
<style scoped>
    .demo{
      background-color:bisque;
    }
</style>