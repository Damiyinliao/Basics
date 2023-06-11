<template>
    <div class="content">
        <h2>一个人的信息</h2>
        姓：<input type="text" v-model="data.person.firstName">
        <br>
        名：<input type="text" v-model="data.person.lastName">
        <br>
        <span>全名：{{ data.person.fullName }}</span>
        <hr>
        <input type="text" v-model="data.person.fullName">
    </div>
</template>

<script>
import { reactive, computed} from '@vue/reactivity'
export default {
    name: 'Demo',
    //vue2写法，不建议
    // computed: {
    //     fullName(){
    //         // vue2可以拿到setup里的数据
    //         return this.data.person.firstName + '-' + this.data.person.lastName
    //     }
    // },
    setup() {
        let data = reactive({
            person: {
                firstName: "何",
                lastName: "维"
            }
        });
        //计算属性——简写（没有考虑计算属性被修改的情况）
        // 给person追加属性，它也是响应式的 
        /*data.person.fullName = computed(()=>{
            return data.person.firstName + ' ' + data.person.lastName;
        });*/
        //计算属性——完整写法（考虑读和写）
        data.person.fullName = computed({
            get(){
                return data.person.firstName + '-' + data.person.lastName;
            },
            set(value){
                let nameArr = value.split('-');
                data.person.firstName = nameArr[0];
                data.person.lastName = nameArr[1];
            }
        })
        return {
            data
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