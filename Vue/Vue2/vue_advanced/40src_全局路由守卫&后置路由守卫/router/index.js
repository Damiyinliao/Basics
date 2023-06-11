import VueRouter from 'vue-router'

// 引入路由组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
// 创建并暴露一个路由
const router = new VueRouter({
    routes:[
        {
            name:'jia',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻页'}
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息页'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',  //使用占位符接受params参数
                            component:Detail,
                            props: true,
                            meta:{title:'详情页'}
                        }
                    ]
                }
            ]
        },
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于页'}
        }
    ]
})
//全局路由守卫
router.beforeEach((to, from, next)=>{
    console.log('to:',to);
    console.log('from:',from);
    // if(to.path === '/home/news' || to.path === '/home/message'){
    //     if(localStorage.getItem('school') === 'zjou'){
    //         next();
    //     }else{
    //         alert("学校名无权限，无法查看页面")
    //     }
    // }else{
    //     next()
    // }
    // 避免大量的对路径进行判断 于是乎使用meta里的元信息（自定义信息）进行判断该条路径是否需要鉴权并放行
    if(to.meta.isAuth){     //判断是否需要鉴权
        if(localStorage.getItem('school') === 'nbcc'){
            
            next()
        }else{
            alert('学校名不对，无权限查看！')
        }
    }else{
        
        next()
    }
})
// 后置路由守卫
// 它们对于分析、更改页面标题、声明页面等辅助功能以及许多其他事情都很有用。比如更改document.title
router.afterEach((to, from)=>{
    console.log('后置路由守卫：',to, from);
    document.title = to.meta.title || '何伟'  //页面跳转之后对所在的title进行复制使其显示正确的title
})


export default router