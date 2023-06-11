<template>
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
          </li>
          <li>
            <router-link class="list-group-item" active-class="active" :to="{name:'xiaoxi'}">Message</router-link>
          </li>
        </ul>
        
        <!-- 让不展示的路由组件保持挂载，不被销毁  想让具体的某个路由组件不被销毁，使用include，说明你想缓存谁。
              里面的是组件名！组件名！组件名！-->
        <keep-alive include="News">
          <router-view></router-view>
        </keep-alive>
        
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>