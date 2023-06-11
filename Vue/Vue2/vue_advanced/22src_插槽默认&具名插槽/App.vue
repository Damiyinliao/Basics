<template>
  <div class="container1">
    <Category title="美食">
      <img slot="center" src="../public/img/油炸圈饼.jpg" alt="">
      <h4 slot="footer" ><a href="javascript:;" >查看更多</a></h4>
      
    </Category>
    <Category title="电影" >
      <video slot="center" controls src="../public/video/mixkit-cliffs-in-the-sea-aerial-shot-1952-medium.mp4"></video>
      <!-- <template slot="footer"> -->
        <!-- 在template还可以这么写 -->
      <template v-slot:footer>
        <div class="foot">
          <a href="javascript:;">经典</a>
          <a href="javascript:;">热门</a>
          <a href="javascript:;">推荐</a>
        </div>
        <h4><a href="javascript:;">欢迎来观影</a></h4>
      </template>
      
    </Category>
    <Category title="游戏">
        <ul slot="center">
          <li v-for="(list, index) in games" :key="index">{{list}}</li>
        </ul>
        <div class="foot" slot="footer">
          <h4><a href="javascript:;">单机游戏</a></h4>
          <h4><a href="javascript:;">网络游戏</a></h4>
        </div>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
  export default {
    name: 'App',
    data(){
        return {
            foods:['羊肉串','辣子鸡丁','牛肉盖浇饭','麻辣烫'],
            films:['小黄人','哆啦A梦','大话西游','星际穿越','阿凡达'],
            games:['王者荣耀','古墓丽影','奇迹暖暖','天天酷跑','一战']
        }
    },
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
