<template>
  <div class="content">
    <h2>{{ person.name }}</h2>
    <h2>{{ person.age }}</h2>
    <h3><button @click="say(666)">SAY</button></h3>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    name: 'Demo',
    props:["name", "school"],
    emits:["saySomething"],
    setup(props, context){
        console.log("props:",props);
        console.log("context:", context);
        //如果声明了props则context.attrs为空，反之则非空
        console.log("context.attrs:", context.attrs);
        console.log("context.emit:", context.emit);
        console.log("conetxt.slots", context.slots);    //插槽
        let person = reactive({
            name: "王老五",
            age: 23
        });
        function say(val){
            context.emit('saySomething', val)
        }
        return {
            person,
            say
        }
    }
}
</script>

<style>
    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>