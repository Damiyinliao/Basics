<template>
  <div class="content">
    <h1>我是App组件</h1>
    <h2>小名：{{ nickname }}，性别：{{ sex }}</h2>
    <h2>姓名：{{ name }}，年龄：{{ age }}</h2>
    <hr>
    <button @click="sayYourName">小名</button>
    <hr>
    <button @click="testSetupData">打印setup数据(读取Vue3里面的数据)</button>
    <hr>
    <button @click="sayHello">hello</button>
    <hr>
    <button @click="Test2">读取Vue2里面的数据</button>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      sex: '男',
      nickname: 'Lan'
    }
  },
  methods: {
    sayYourName(){
      alert("My name is" + this.nickname);
    },
    testSetupData(){
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayHello);
    }
  },
  setup() {
    //数据
    let name = "He";
    let age = 23;
    //方法
    function sayHello() {
      alert(`我叫${name}，我${age}岁了，你好啊！`);
    };
    function Test2(){
      console.log(name);
      console.log(age);
      console.log(this.nickname);
      console.log(this.sayYourName);
    };
    // 返回一个对象
    return {
      name,
      age,
      sayHello,
      Test2
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
