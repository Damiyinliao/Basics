<template>
  <div class="demo">
    <h3>名称：{{name}}</h3>
    <h3>地址：{{address}}</h3>
    <button @click="sendStudentName">拿到学生的名字</button>
    <button @click="unbind">解绑一个自定义事件</button>
    <button @click='death'>销毁当前student组件实例</button>
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
        //触发了Student组件实例身上的getStudentName事件
        this.$emit('hewei',this.name)
      },
      unbind(){
        //this.$off("hewei")   //解绑一个自定义事件
        //this.$off(['atguigu','hewei'])   //解绑多个自定义事件
        this.$off()   //解绑所有的自定义事件
      },
      death(){
        this.$destroy()   //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全部不凑效
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