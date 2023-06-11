<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <h1 class="come" v-show="isShow">你好！</h1> -->
    <!-- <transition name="hw"> -->
        <!-- <h1 v-show="isShow">你好！</h1> -->
    <!-- </transition> -->
    <!-- 多个元素过渡 需使用transition-group -->
    <!-- 页面刚进来时，会直接显示，此时如果想要实现，点开页面是，所有的展示内容渐渐上来，需要增加，appear 这个属性。 -->
    <transition-group 
        appear 
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
    >
        <h1 v-show="!isShow" key="1">你好！</h1>
        <h1 v-show="isShow" key="2">何伟！</h1>
    </transition-group>
  </div>
</template>

<script>
    import 'animate.css'
    export default {
        name:'Test3',
        data() {
            return {
                isShow:true
            }
        },
    }
</script>

<style scoped>
    h1{
        background-color: brown;
    }
    /* 进入的起点、离开的终点 */
    /* .hw-enter,.hw-leave-to{
        transform: translateX(-100%)
    }
    /* 过渡动画 */
    /* .hw-enter-active,.hw-leave-active{
        transition: 1s linear;
    }
    /* 进入的终点、离开的起点 */
    /* .hw-enter-to,.hw-leave{
        transform: translateX(0);
    }  */
</style>