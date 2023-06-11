<template>
  <div class="content">
    <button @click="isShow">Demo组件显示/隐藏</button>
    <hr>
    <Demo v-if="show"></Demo>    
  </div>
</template>

<script>
import Demo from '@/components/Demo'
import { ref } from 'vue';
export default {
  name: 'App',
  components: {
    Demo
  },
  setup() {
    let show = ref(true);
    function isShow(){
      show.value = !show.value;
    }
    return {
      show,
      isShow
    }
  }
}
</script>

<style>

</style>
