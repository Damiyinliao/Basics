<template>
    <div class="content">
        <h2>数值+1：{{ sum }}</h2>
        <h2>消息：{{ msg }}</h2>
        <button @click="sum++">+1</button>
        <hr>
        <button @click="msg += '!'">修改信息</button>
        <hr style="margin-top: 10px; width: 100%;" />

        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="person.name += '!'">修改姓名</button>
        <hr>
        <button @click="person.age++">增加年龄</button>

        <h2>薪资：{{ person.life.job.salary }}K</h2>
        <button @click="person.life.job.salary++">涨薪</button>
    </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref, watch, watchEffect } from 'vue';
export default {
    name: 'Demo',
    setup() {
        // 通过组合式API的形式去使用生命周期钩子
        onBeforeMount(()=>{
            console.log("---onBeforeMount---");
        });
        onMounted(()=>{
            console.log("---onMounted---");
        });
        onBeforeUpdate(()=>{
            console.log("---onBeforeUpdate---");
        })
        onUpdated(()=>{
            console.log("---onUpdated---");
        })
        onBeforeUnmount(()=>{
            console.log("---onBeforeUnmount---");
        })
        onUnmounted(()=>{
            console.log("---onUnmounted---");
        })
        let sum = ref(0);
        let msg = ref("你好啊");
        let person = reactive({
            name: "贺兰",
            age: 23,
            life: {
                job: {
                    salary: 20
                }
            }
        });
        return {
            sum,
            msg,
            person
        };
    }
}
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>