<template>
  <div class="container1">
    <Category title="游戏">
       <!-- {games} 为解构赋值 即 {games} = games -->
      <template scope="games">
        <!-- {{games}} -->
        <ul slot="center">
          <li v-for="(list, index) in games" :key="index">{{list}}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <ol slot="center">
          <li v-for="(list, index) in games" :key="index">{{list}}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <h4 slot="center">
          <li v-for="(list, index) in games" :key="index">{{list}}</li>
        </h4>
      </template>
        
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
  export default {
    name: 'App',
    components:{Category}
  }
</script>
<style scoped>
  .container1,.foot{
    display: flex;
    justify-content: center;
  }
  h4{
    text-align: center;
  }
  a{
    color: aliceblue;
    text-decoration: none;
    
  }
  img{
    width: 100%;
  }
  video{
    width: 100%;
  }
</style>
