<template>
    <h1>{{ sum }}</h1>
    <div class="content">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="name += '!'">修改姓名</button>
        <hr>
        <button @click="age++">增加年龄</button>
        <h2>薪资：{{ life.job.salary }}K</h2>
        <button @click="life.job.salary++">涨薪</button>
        <h1>{{ person }}</h1>
    </div>
</template>

<script>
import { reactive, ref, toRef, toRefs, readonly, shallowReadonly} from 'vue';
export default {
    name: 'Demo',
    setup() {

        // 数据
        let sum = ref(0);
        let person = reactive({
            name: "贺兰",
            age: 23,
            life: {
                job: {
                    salary: 20
                }
            }
        });

        // 应用场景: 不希望数据被修改时。

        // 让一个响应式数据变为只读的（深只读）
        // person = readonly(person);

        // shallowReadonly：让一个响应式数据变为只读的（浅只读）
        // person 里的 salary 还可以被修改
        // person = shallowReadonly(person);

        
        return {
            sum,
            ...toRefs(person)
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