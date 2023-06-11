<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWords"/>&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
</template>

<script>
    export default {
        name:'Search',
        data() {
            return {
                keyWords:''
            }
        },
        methods:{
            searchUsers(){
                //请求前更新List的数据
                this.$bus.$emit('updateListData', {isLoading:true, errMsg:'', users:[], isFirst:false})
                //演示不使用axios来发送请求 使用vue-resource中的$http发送请求
                this.$http.get(`https://api.github.com/search/users?q=${this.keyWords}`).then(
                    response => {
                        console.log('获取信息成功了:',response.data.items);
                        this.$bus.$emit('updateListData', {isLoading:false, errMsg:'', users:response.data.items})
                    },
                    error => {
                        // console.warn(error.messsage);
                        this.$bus.$emit('updateListData', {isLoading:false, errMsg:error.message, users:[]})
                    }
                )
            }
        }
    }
</script>

<style>

</style>