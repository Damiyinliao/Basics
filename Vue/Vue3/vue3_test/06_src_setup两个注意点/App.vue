<template>
  <div class="content">
    <Demo 
      name="hw" 
      school="zjou"
      @saySomething="saySomething"
    >
      //vue3当中要写成v-slot:
      <template v-slot:hw>
        <span>何伟</span>
      </template>
    </Demo>
  </div>
</template>

<script>
import Demo from '@/components/Demo'
export default {
  name: 'App',
  components: {
    Demo
  },
  setup() {
    function saySomething(val){
      alert(val);
    };
    return {
      saySomething,
    }
  }
}
</script>

<style>

</style>
