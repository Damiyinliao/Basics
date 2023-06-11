<template>
    <div class="content">
        我是孙组件
        <Dialog></Dialog>
    </div>
</template>

<script>
import Dialog from './Dialog';
export default {
    name: 'Grandson',
    components: {
        Dialog
    },
    setup() {
        
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