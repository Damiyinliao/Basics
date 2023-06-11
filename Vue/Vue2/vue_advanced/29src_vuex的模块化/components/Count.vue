<template>
     <div>
        <h1>总和数：{{sum}}</h1>
        <h2 style="color:red">Person组件人数为：{{personList.length}}</h2>  
        <h3>我在{{school}}，学习{{subject}}</h3>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">是奇数就加</button>
        <button @click="incrementWait(n)">等等就加</button>
    </div>
</template>

<script>
import { mapState,mapActions,mapMutations } from 'vuex'
export default {
    name:'Count',
    data(){
        return {
            n:1,
            // sum:0
        }
    },
    computed:{
        ...mapState('countAbout',['sum','school','subject']),
        ...mapState('personAbout',['personList']),
        // ...mapGetters('countAbout',['double'])
    },
    methods: {
        //靠mapActions生成：increment、decrement（对象形式）
        ...mapMutations('countAbout', {increment:'JIA',decrement:'JIAN'}),
        ...mapActions('countAbout', {incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
    },
    mounted(){
        
    }
}
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
    
</style>