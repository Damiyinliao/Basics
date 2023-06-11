<template>
  <div>
    <h3>名称：{{name}}</h3>
    <h3>地址：{{address}}</h3>
    <h3>年龄：{{myAge+1}}</h3>
    <button @click="addAge">age+1</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
          myAge:this.age
        }
    },
    methods:{
      addAge(){
        this.myAge++
      }
    },
  
    //简单声明接受
    props:['name', 'address', 'age']


  //接受的同时对数据进行类型限制
    // props:{
    //   name:String,
    //   age:Number,
    //   address:String
    // }

    //接受的同时对数据：进行类型限制+默认值得指定+必要性的限制
    // props:{
    //   name:{
    //     type:String,
    //     required:true
    //   },
    //   address:{
    //     type:String,
    //     default:'海大南路一号'
    //   },
    //   age:{
    //     type:Number,
    //     required:true
    //   }
    // }
}
</script>

<style>

</style>