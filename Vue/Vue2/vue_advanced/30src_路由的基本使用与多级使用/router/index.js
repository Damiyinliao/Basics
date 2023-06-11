import VueRouter from 'vue-router'

// 引入路由组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
// 创建并暴露一个路由
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message
                }
            ]
        },
        {
            path:'/about',
            component:About
        }
    ]
})