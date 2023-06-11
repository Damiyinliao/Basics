<template>
     <div class="container">
       <h3>{{title}}分类</h3>
       <slot name="center"></slot>
       <slot name="footer"></slot>
       <!-- <ul>
            <li v-for="(list, index) in listData" :key="index">{{list}}</li>
       </ul> -->
    </div>
</template>

<script>
export default {
    name:'Category',
    data() {
        return {
            // title:'',
        }
    },
    props:['title','listData']
}
</script>

<style scoped>
    h3{
        text-align: center;
        background-color: grey;
    }
    ul li{
        color: white;
        /* background-color: #efeeb4; */
    }
    .container{
        width: 200px;
        height: 300px;
        background-color: #309975;
    }
</style>