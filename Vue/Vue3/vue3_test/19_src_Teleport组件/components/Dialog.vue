<template>
  <button @click="isShow = true">点击获取弹窗信息</button>
  <Teleport to="body">
    <div v-if="isShow" class="mask">
        <div class="dialog">
            <h3>我是一个弹窗</h3>
            <h4>Something</h4>
            <h4>Something</h4>
            <h4>Something</h4>
            <button @click="isShow = false">关闭弹窗</button>
        </div>
    </div>
  </Teleport>
</template>

<script>
import { ref}  from 'vue'
export default {
    name: 'Dialog',
    setup() {
        let isShow = ref(false);
        return {
            isShow
        }
    }
}
</script>

<style>
    
    .mask{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .dialog{
        position: absolute;
        /* 参考定位的元素 */
        top: 50%;
        left: 50%;
        /* 以自身为参照点，向上向左移动50% */
        transform: translate(-50%, -50%);
        text-align: center;
        width: 300px;
        height: 300px;
        background-color: #895555;
    }
</style>