// 引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
// 简写形式
// createApp(App).mount('#app')

// 创建应用实例对象——app(类似于之前Vue2中的vm，但app比vm更“轻”)
const app = createApp(App);

console.log(app);
// 挂载
app.mount('#app');
// 卸载
setTimeout(()=>{
    app.unmount('#app');
}, 2000);

// Vue2 当中的写法
// new Vue({
//     render: h => h(App),
//     router,
// }).$mount('#app')
  