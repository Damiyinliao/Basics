<template>
    <div class="content">
        <h2>数值+1{{ sum }}</h2>
        <h2>{{ msg }}</h2>
        <button @click="sum++">+1</button>
        <button @click="msg+='!'">修改信息</button>
        <hr style="margin-top: 10px; width: 100%;"/>

        <h2>{{ person.name }}</h2>
        <h2>{{ person.age }}</h2>
        <button @click="person.name+='!'">修改姓名</button>
        <button @click="person.age++">增加年龄</button>

        <h2>{{ person.life.job.salary }}</h2>
        <button @click="person.life.job.salary++">涨薪</button>
    </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
export default {
    name: 'Demo',
    //vue2写法
    // watch: {
        // 简写形式
        // sum(newValue, oldValue) {
        //     console.log("sum值变化了", newValue, oldValue);
        // },
        // 完整形式
        // sum: {
        //     immediate: true,    //一上来就监听一次
        //     deep: true,
        //     handler(newValue, oldValue){
        //         console.log('sum值变化了', newValue, oldValue);
        //     }
        // }
    // },
    

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
        // 第一个参数：要监视的数据。第二个数据：监视回调函数。第三个参数：监视的配置信息
        // watch()
        // 情况一：监视ref所定义的单个响应式数据
        /*watch(sum,(newValue, oldValue)=>{
            console.log('sum变了', newValue, oldValue);
        }, {immediate: true});*/

        // 情况二：监视ref所定义的多个响应式数据
        /*watch([sum, msg], (newValue, oldValue)=>{
            console.log('sum或msg变了', newValue, oldValue);
        }, {immediate: true});*/

        //情况三：监视reactive所定义的一个响应式数据
        //1.注意，此处无法正确的获取oldValue
        //2.注意，强制开启了深度监视(deep配置无效)
        /*watch(person, (newValue, oldValue)=>{
            console.log("person变化了", newValue, oldValue);
        }, {deep: false});*/

        //情况四：监视reactive所定义的一个响应式数据中的某个属性，需要写箭头函数
        // watch(()=>person.name, (newValue,oldValue)=>{
        //     console.log(newValue,oldValue);
        // })

        //情况五：监视reactive所定义的一个响应式数据中的某些属性
        // watch([()=>person.name, ()=>person.age], (newValue,oldValue)=>{
        //     console.log(newValue,oldValue);
        // })

        //特殊情况
        watch(()=>person.life, (newValue, oldValue)=>{
            console.log("person的life的salary变化了", newValue, oldValue);
        },{deep: true});//此处由于监视的是creactive所定义的对象中的某个属性，所以deep配置有效
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