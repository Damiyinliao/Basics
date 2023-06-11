//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)



const countAbout = {
    namespaced:true,
    actions:{
        jia(context, value){
            // console.log(context, value);
            context.commit('JIA', value)
        },
        jian(context, value){
            context.commit('JIAN', value)
        },
        jiaOdd(context, value){
            if(context.state.sum%2){
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value){
            setTimeout(()=>{
                context.commit('JIA', value)
            },600)
        }
    },
    mutations:{
        JIA(state, value){
            // console.log(state, value);
            state.sum += value
        },
        JIAN(state, value){
            state.sum -= value
        }
    },
    state:{
        sum:0,
        subject:'计算机科学与技术',
        school:'浙江海洋大学'
    },
    getters:{
        double(state){
            return state.sum*2
        }
    }
}

const personAbout = {
    namespaced:true,
    actions:{
        addPersonHe(context, value){
            if(value.name.indexOf('何') === 0){
                context.commit('ADD_PERSON', value)
            }else{
                alert("请输入一个姓何的名字")
            }
        }
    },
    mutations:{
        ADD_PERSON(state, value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'李四'},
            {id:'002',name:'张三'}
        ]
    },
    getters:{
        firstName(state){
            return state.personList[0].name
        }
    }
}


//创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countAbout,
        personAbout:personAbout
    }
    
})