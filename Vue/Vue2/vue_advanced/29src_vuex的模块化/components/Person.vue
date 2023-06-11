<template>
  <div>
    <h1>人员列表</h1>
    <h2 style="color:red">Count组件求和为{{sum}}</h2>
    <h3>列表第一个人的名字是{{firstPerson}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addHe">添加一个姓何的人</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
// import {mapState} from 'vuex'
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        computed:{
                //第一种写法
                personList(){
                    return this.$store.state.personAbout.personList
                },
                sum(){
                    return this.$store.state.countAbout.sum
                },
                firstPerson(){
                    return this.$store.getters['personAbout/firstName']
                }
                //使用mapState进行简写
                // ...mapState('personAbout',['personList']),
                // ...mapState('countAbout',['sum'])

        },
        methods: {
            add(){
                const personObj = {id:nanoid(), name:this.name}
                this.$store.commit('personAbout/ADD_PERSON', personObj)
                this.name=''
            },
            addHe(){
                const personObj = {id:nanoid(), name:this.name}
                this.$store.dispatch('personAbout/addPersonHe', personObj)
                this.name=''
            }
        },
    }
</script>

<style>

</style>