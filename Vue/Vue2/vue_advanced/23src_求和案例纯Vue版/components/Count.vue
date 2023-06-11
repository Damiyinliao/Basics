<template>
     <div class="container">
        <h1>总和数：{{sum}}</h1>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">是奇数就加</button>
        <button @click="incrementWait">等等就加</button>
    </div>
</template>

<script>
export default {
    name:'Count',
    data(){
        return {
            n:1,
            sum:0
        }
    },
    methods: {
        increment(){
            this.sum +=  this.n
        },
        decrement(){
            this.sum -=  this.n
        },
        incrementOdd(){
            if(this.sum%2){
                this.sum += this.n
            }
        },
        incrementWait(){
            setTimeout(() => {
                this.sum += this.n
            }, 500);
        }
    },
    mounted(){
        console.log('Count',this);
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