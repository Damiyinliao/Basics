<template>
    <div class="demo">
        <h3>名称：{{name}}</h3>
        <h3>地址：{{address}}</h3>
        <button @click="sendSchoolName">拿到学校的名字</button>
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
        
        methods: {
            sendSchoolName(){
                
            }
        },
        mounted() {
            this.$bus.$on('getStuName', (stuName)=>{
                console.log("School组件获得了Student的name：", stuName);
            })

           
        },
        beforeDestroy() {
            this.$bus.$off('getStuName')
            
        },
    }
</script>

<style scoped>
    .demo{
        background-color: aqua;
    }
</style>