<template>
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
import { reactive, ref, toRef, toRefs } from 'vue';
export default {
    name: 'Demo',
    setup() {
        let person = reactive({
            name: "贺兰",
            age: 23,
            life: {
                job: {
                    salary: 20
                }
            }
        });
        const name1 = person.name;
        console.log('@@@', name1);     // @@@ 贺兰

        // toRef 返回的是一个RefImpl
        const name2 = toRef(person, 'name');    // ### ObjectRefImpl
        console.log('###', name2);

        const x = toRefs(person)
        console.log(x);
        return {

            // 需要使用toRef才能真正引用到person内的数据进行修改
            // name: toRef(person, 'name'),
            // age: toRef(person, 'age'),
            // salary: toRef(person.life.job, 'salary'),

            // 这么写不对，ref是重新复制了一份数据进行修改，并没有引用person内的数据进行修改
            // name: ref(person.name),
            // age: ref(person.age),
            // salary: ref(person.life.job.salary),

            person,

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