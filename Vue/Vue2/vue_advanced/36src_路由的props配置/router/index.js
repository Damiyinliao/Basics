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
                            // 路由的props配置：让路由组件更方便的收到参数
                            // 第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
                            // props:{a:1,b:2}

                            //第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
                            // props:true

                            // 第三种写法
                            // props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
                            // props($route){
                            //     return {id:$route.query.id, title:$route.query.title}
                            // }
                            //解构赋值形式
                            props({query}){
                                return {id:query.id, title:query.title}
                            }
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