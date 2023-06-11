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
import { reactive, ref, watch, watchEffect } from 'vue';
export default {
    name: 'Demo',
    setup() {
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
        watch(sum, (newValue, oldValue) => {
            console.log("sum变了", newValue, oldValue);
        }, { immediate: true });

        // 老写法，监视一个响应式数据当中的某个属性，不方便。既要指明监视的属性，也要指明监视的回调
        // 用watchEffect简便
        watch(() => person.life.job.salary, () => {

        });
        //  里面用到谁就监测谁，不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性
        watchEffect(() => {
            const x1 = sum.value;
            const x2 = person.age;
            console.log("watchEffect执行了");
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