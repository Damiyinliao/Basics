<template>
    <div>
        <h3>名称：{{name | mySlice}}</h3>
        <h3>地址：{{address}}</h3>
        <button @click="test">打招呼</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data(){
            return {
                name:'浙江海洋大学',
                address:'海大南路一号'
            }
        },
        methods:{
            test(){
                this.hello()
            }
        }
    }
</script>