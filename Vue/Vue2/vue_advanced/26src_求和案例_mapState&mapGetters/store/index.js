//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions对象——响应组件中用户的动作
const actions = {
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
}
//准备mutations对象——修改state中的数据
const mutations = {
    JIA(state, value){
        // console.log(state, value);
        state.sum += value
    },
    JIAN(state, value){
        state.sum -= value
    }
}
//准备state对象——保存具体的数据
const state = {
    sum:0,
    subject:'计算机科学与技术',
    school:'浙江海洋大学'
}

const getters = {
    double(state){
        return state.sum*2
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})