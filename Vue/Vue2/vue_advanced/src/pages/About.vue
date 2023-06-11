<template>
  <h2>我是About的内容</h2>
</template>

<script>
    export default {

      //通过路由规则，进入该组件时被调用
      // 组件内守卫
      beforeRouteEnter(to, from, next){
        console.log('About--beforeRouteEnter', to, from);
        if(to.meta.isAuth){
          if(localStorage.getItem('school')==='zjou'){
            next()
            
          }else{
            alert()
          }
        }
      },

      //通过路由规则，离开该组件时被调用
      beforeRouteLeave(to, from,next){
        console.log('About--beforeRouteLeave', to, from);
        next()
      }
    }
</script>

<style>

</style>