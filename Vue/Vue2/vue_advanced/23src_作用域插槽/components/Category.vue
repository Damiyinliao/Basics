<template>
     <div class="container">
       <h3>{{title}}分类</h3>
       <slot :games="games"></slot>
       <!-- <ul>
            <li v-for="(list, index) in listData" :key="index">{{list}}</li>
       </ul> -->
    </div>
</template>

<script>
export default {
    name:'Category',
    data(){
        return {
            foods:['羊肉串','辣子鸡丁','牛肉盖浇饭','麻辣烫'],
            films:['小黄人','哆啦A梦','大话西游','星际穿越','阿凡达'],
            games:['王者荣耀','古墓丽影','奇迹暖暖','天天酷跑','一战']
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