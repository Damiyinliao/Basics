<template>
  <div class="content">
    <h1>我是App组件</h1>
    <h2>姓名：{{ person.name }}，年龄：{{ person.age }}</h2>
    <h2>类型：{{ person.job.type }}，{{ person.job.salary }}</h2>
    <!-- <hr>
    <h2>{{ job.a.b.c }}</h2> -->
    <hr>
    <h2>{{ person.hobbies }}</h2>
    <button @click="changeInfo">改变信息</button>
  </div>
</template>

<script>

import { ref, reactive } from "vue"
export default {

  name: 'App',
  setup() {
    //数据
    // let name = ref("He");
    // let age = ref(23);
    // let job = reactive({
    //   type:"前端工程师",
    //   salary:"12k",
    //   a: {
    //     b: {
    //       c : 222
    //     }
    //   }
    // });
    // let hobbies = reactive(['郊游','游泳','打台球']);
    //  代理对象  //源对象
    let person = reactive({
      name: "He Lan",
      age: 23,
      job: {
        type: "前端工程师",
        salary: "13k",
      },
      hobbies: ["骑行", "爬山", "游泳"]
    })
    //方法
    //改变属性值
    function changeInfo(){
      console.log(person);
      person.job.type = "Java工程师";
      person.job.salary = "20k";
      person.hobbies[0] = "健身";
    };
    // 返回一个对象
    return {
      // name,
      // age,
      // job,
      // hobbies,
      person,
      changeInfo
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
