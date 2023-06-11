<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Suspense>
      <template #default>
        <Child></Child>
      </template>
      <!-- 当上面default组件还未加载出来时，先加载下面这个备用的 -->
      <template #fallback>
        <h3>稍等，正在加载页面...</h3>
      </template>

    </Suspense>
  </div>
</template>

<script>
// import Child from '@/components/Child'  //静态引入
import { defineAsyncComponent } from 'vue';
const Child = defineAsyncComponent(()=>import('@/components/Child'))  //异步引入或动态引入
export default {
  name: 'App',
  components: {
    Child
  }
}
</script>

<style scoped>
.app {
  background-color: #689eb7;
  padding: 30px;
}
</style>
