import VueRouter from 'vue-router'

// 引入路由组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
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
                    name:'msg',
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'detail',
                            path:'detail/:id/:title',  //使用占位符接受query参数
                            component:Detail,
                            props: true
                        }
                    ]
                }
            ]
        },
        {
            path:'/about',
            component:About
        }
    ]
})