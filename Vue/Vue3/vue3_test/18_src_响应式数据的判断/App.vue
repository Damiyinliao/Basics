<template>
  <div class="app">
    <h2>我是App组件</h2>
  </div>

</template>

<script>
import { provide, reactive, readonly, ref, toRefs, isRef, isReactive, isReadonly, isProxy } from 'vue';
export default {
  name: 'App',
  components: {

  },
  setup() {
    let info = reactive({
      name: '贺兰',
      school: 'ZJOU'
    });
    let sum = ref(0);

    let info2 = readonly(info);

    console.log(isRef(sum));        //true
    console.log(isReactive(info));  //true
    console.log(isReadonly(info2)); //true
    console.log(isProxy(info));     //true
    console.log(isProxy(info2));    //true
    return {
      ...toRefs(info),
    }
  }
}
</script>

<style scoped>
.app {
  background-color: #434040;
  padding: 30px;
}
</style>
