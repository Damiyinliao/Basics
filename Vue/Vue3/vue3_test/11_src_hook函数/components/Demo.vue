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

        <hr>
        <div class="show-point">
            <h3>point.x:{{ point.x }}</h3>
            <h3>point.y:{{ point.y }}</h3>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';
import showPoint from '@/hooks/showPoint'
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
        let point = showPoint();
        return {
            sum,
            msg,
            person,
            point
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