<template>
    <div class="content">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="name += '!'">修改姓名</button>
        <hr>
        <button @click="age++">增加年龄</button>
        <h2>薪资：{{ life.job.salary }}K</h2>
        <button @click="life.job.salary++">涨薪</button>
        <hr style="width: 100%;">
        <button @click="showRawPerson">展示原始的person数据</button>
        <hr style="width: 100%;">
        <h2 v-show="person.car">{{ person.car }}</h2>
        <button @click="addCar">展示车子</button>
        <button @click="person.car.carName += '!'">换车名</button>
    </div>
</template>

<script>
import { reactive, ref, toRefs, markRaw, toRaw} from 'vue';
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
        /**
         * markRaw()
         *作用：标记一个对象，使其永远不会再成为响应式对象。
         * 应用场景:
         * 1. 有些值不应被设置为响应式的，例如复杂的第三方类库等。
         * 2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。
         */
        function addCar(){
            let car = {carName:'比亚迪', price:'20W'};
            // person.car = car; // 响应式的
            person.car = markRaw(car); //将car变成非响应式的，就是原始数据
        };
        /**
         * toRaw()
         *  作用：将一个由reactive生成的响应式对象转为普通对象。
         *  使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
         */
        function showRawPerson(){
            // toRaw 将响应式数据变成原始数据，对其修改不会改变页面上数据的变化
            let p = toRaw(person);
            p.age++;
            console.log(p);
        };
        return {
            person,
            ...toRefs(person),
            addCar,
            showRawPerson
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