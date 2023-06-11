<template>
    <div>
        <ul>
            <li v-for="m in msgList" :key="m.id">
                <!-- 跳转并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
                <!-- 跳转并携带params参数，对象写法 对象写法 -->
                <router-link 
                    :to="{
                        name:'detail',
                        // 第二种接受参数的paras:true 需使用params方式
                        // params:{
                        //     id:m.id,
                        //     title:m.title
                        // }
                        // 第三种接收参数的paras(){return{}} 方式需使用 query 方式
                        query:{
                            id:m.id,
                            title:m.title
                        }
                    }"
                >{{m.title}}</router-link>&nbsp;&nbsp;
                
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
// import Detail from './Detail.vue'
export default {
    name:'Message',
    data() {
        return {
            msgList:[
                {id:'001', title:'消息1'},
                {id:'002', title:'消息2'},
                {id:'003', title:'消息3'}
            ]
        }
    },
    // components:{Detail}
}
</script>

<style>

</style>