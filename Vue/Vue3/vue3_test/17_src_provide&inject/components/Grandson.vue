<template>
    <div class="content">
        我是孙组件{{ info }}
    </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
    name: 'Demo',
    setup() {
        //inject函数 传过来的名
        let info = inject('info');
        return{
            info
        }
    }
}
</script>

<style>
.content {
    background-color: skyblue;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>