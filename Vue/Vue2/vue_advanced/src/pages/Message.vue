<template>
    <div>
        <ul>
            <li v-for="m in msgList" :key="m.id">
                <router-link 
                    :to="{
                        name:'detail',
                        query:{
                            id:m.id,
                            title:m.title
                        }
                    }"
                >{{m.title}}</router-link>&nbsp;&nbsp;
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
                <button @click="goTest">go api测试</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
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
    methods:{
        pushShow(m){
            console.log('@',m.id);
            this.$router.push({
                name:'detail',
                params:{
                    id:m.id,
                    title:m.title
                }
            })
        },
        replaceShow(m){
            this.$router.replace({
                name:'detail',
                params:{
                    id:m.id,
                    title:m.title
                }
            })
        },
        goTest(){
            //连退两步导航操作
            this.$router.go(-2)
        }
    }
}
</script>

<style>

</style>