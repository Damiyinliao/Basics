<template>
     <div class="container">
        <h1>总和数：{{sum}}</h1>
        <h2>{{bigSum}}</h2>  
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
import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'
export default {
    name:'Count',
    data(){
        return {
            n:1,
            // sum:0
        }
    },
    computed:{
        //手动获取state里的数据
        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // },
        // bigSum(){
        //     return this.$store.getters.double
        // },
        // 使用mapState mapGetters获取state里的数据
        ...mapState({sum:'sum',school:'school',subject:'subject'}),
        ...mapGetters({bigSum:'double'}),
    },
    methods: {
        //靠mapActions生成：increment、decrement（对象形式）
        ...mapMutations({increment:'JIA',decrement:'JIAN'}),
        //increment(){
        //    // this.sum +=  this.n
        //    this.$store.dispatch('jia', this.n)
        //},
        //decrement(){
        //    // this.sum -=  this.n
        //    //没有业务逻辑，可以直接跳过 dispatch到actions，用commit到mutations
        //    this.$store.commit('JIAN', this.n)
        //},
        //靠mapActions生成：incrementOdd、incrementWait（对象形式）
        ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
        //incrementOdd(){
        //    this.$store.dispatch('jiaOdd', this.n)
        //    // if(this.sum%2){
        //    //     this.sum += this.n
        //    // }
        //},
        //incrementWait(){
        //    this.$store.dispatch('jiaWait', this.n)
        //    // setTimeout(() => {
        //    //     this.sum += this.n
        //    // }, 500);
        //}
    },
    mounted(){
        // console.log('Count',this);
    }
}
</script>

<style scoped>
    /* .container{
        display: flex;
        justify-content: ;
    } */
    button{
        margin-left: 5px;
    }
    
</style>