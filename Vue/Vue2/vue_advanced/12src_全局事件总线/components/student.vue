<template>
  <div class="demo">
    <h3>名称：{{name}}</h3>
    <h3>地址：{{address}}</h3>
    <button @click="sendStudentName">发送学生的名字给School</button>
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
    },
    methods: {
      sendStudentName(){
        this.$bus.$emit('getStuName',this.name)
        
      }
    },
}
</script>
<style scoped>
    .demo{
      background-color:bisque;
    }
</style>