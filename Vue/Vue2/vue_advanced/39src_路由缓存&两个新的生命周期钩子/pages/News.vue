<template>
      <ul>
        <li :style="{opacity}">vue工程师</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
    export default {
        name:'News', // 组件名
       data(){
        return {
            opacity:1
        }
       },
       // 两个新的生命周期钩子
       activated() {
        console.log("News组件被激活了");
        this.timer = setInterval(()=>{
            console.log("hewei")
            this.opacity -= 0.01
            if(this.opacity < 0)this.opacity = 1
        }, 20)
       },
       deactivated() {
        console.log("News组件失活了");
        clearInterval(this.timer)
       }
    }
</script>

<style>

</style>