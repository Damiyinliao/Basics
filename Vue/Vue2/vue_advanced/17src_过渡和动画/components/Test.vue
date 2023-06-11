<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <h1 class="come" v-show="isShow">你好！</h1> -->
    <transition>
        <h1 v-show="isShow">你好！</h1>
    </transition>
    
  </div>
</template>

<script>
    export default {
        name:'Test',
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
    .v-enter-active{
        animation: hewei 1s;
    }
    .v-leave-active{
        animation: hewei 1s reverse;
    }
    .come{
        animation: hewei 1s;
    }
    .go{
        animation: hewei 1s reverse;
    }
    @keyframes hewei {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>