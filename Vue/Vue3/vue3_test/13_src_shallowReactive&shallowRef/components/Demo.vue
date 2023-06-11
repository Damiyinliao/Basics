<template>
    <div class="content">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="name += '!'">修改姓名</button>
        <hr>
        <button @click="age++">增加年龄</button>
<!-- 
        <h2>薪资：{{ life.job.salary }}K</h2>
        <button @click="life.job.salary++">涨薪</button> -->
        <h1>{{ person }}</h1>
        <hr>
        <h2>x:{{ x.n }}</h2>
        <button @click="x={n:99}">change x's number</button>
        <button @click="x.n++">x.n ++</button>
    </div>
</template>

<script>
import { reactive, ref, toRef, toRefs, shallowReactive, shallowRef } from 'vue';
export default {
    name: 'Demo',
    setup() {

        // 数据

        // let person = reactive({
        //     name: "贺兰",
        //     age: 23,
        //     life: {
        //         job: {
        //             salary: 20
        //         }
        //     }
        // });

        // shallow 只考虑第一层数据的响应式，如 name 和 age
        let person = shallowReactive({
            name: "贺兰",
            age: 23,
            life: {
                job: {
                    salary: 20
                }
            }
        });

        // shallowRef 只处理基本数据类型的响应式, 不进行对象的响应式处理。
        // 可以替换， 不能被修改
        let x = shallowRef({
            n: 0
        });

        return {
            person,
            x
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