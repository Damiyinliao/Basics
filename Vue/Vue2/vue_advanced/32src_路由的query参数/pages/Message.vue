<template>
    <div>
        <ul>
            <li v-for="m in msgList" :key="m.id">
                <!-- 跳转并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
                <!-- 跳转并携带params参数，对象写法 推荐使用 -->
                <router-link 
                    :to="{
                        path:'/home/message/detail',
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