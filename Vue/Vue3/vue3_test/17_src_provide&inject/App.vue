<template>
<div class="app">
  我是祖组件
  <h2>祖组件信息:{{ name }}-----{{ school }}</h2>
  <Child></Child>
</div>

</template>

<script>
import Child from '@/components/Child'
import { provide, reactive, ref , toRefs} from 'vue';
export default {
  name: 'App',
  components: {
    Child
  },
  setup(){
    let info = reactive({
      name: '贺兰',
      school: 'ZJOU'
    });
    // provide函数，第一个参数，传过去的名，第二个参数：要传的谁
    provide('info', info)
    return {
      ...toRefs(info),
    }
  }
}
</script>

<style scoped>
  .app{
    background-color: #434040;
    padding: 30px;
  }
</style>
