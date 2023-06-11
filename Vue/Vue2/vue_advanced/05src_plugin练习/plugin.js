import Vue from "vue";

export default {
    install(a){
        console.log('@',a);
        // 打印出来的a既不是vm也不是vc，是vue原型，即该插件可以再vue上进行相关操作
        //全局过滤器
        Vue.filter('mySlice', function(val){
            return val.slice(0, 4)
        })

        //定义全局指令  自定
        Vue.directive('fbind', function(){

        })

        //定义混入
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:200
                }
            }
        })


        Vue.prototype.hello = function(){
            alert('hello!')
        }
    }
}