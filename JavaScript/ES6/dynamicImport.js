//以前的静态引入
// import * as fn1 from "./hello.js";

const btn = document.getElementById('btn');
//静态使用
// btn.addEventListener('click', function(){
//     fn1.hello();
// })

//动态引入使用
btn.addEventListener('click',function(){
    import('./hello.js').then(module => {
        module.hello();
    })
})