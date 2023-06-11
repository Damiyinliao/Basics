import Vue from 'vue'
import Vuex from 'vuex'
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
Vue.use(Vuex)

// 声明数组和对象
const states = []
const getterss = []
const mutationss = []
const actionss = []
const allModule = {
  state: {},
  getters: {},
  mutations: {},
  actions: {}
};

// 合并所有module
const files = require.context("./modules", false, /\.js$/);
files.keys().forEach((key) => {
  // 解析
  let state = files(key)['default']['state'] || {};
  let getters = files(key)['default']['getters'] || {};
  let mutations = files(key)['default']['mutations'] || {};
  let actions = files(key)['default']['actions'] || {};

  // 合并对象
  Object.assign(allModule.state, state);
  Object.assign(allModule.mutations, mutations);
  Object.assign(allModule.actions, actions);
  Object.assign(allModule.getters, getters);

  // 填充数组
  states.push(...Object.keys(state))
  getterss.push(...Object.keys(getters))
  mutationss.push(...Object.keys(mutations))
  actionss.push(...Object.keys(actions))
});
const store = new Vuex.Store(allModule)
//导出store给Vue根实例（底层也是放到原型上）和直接挂载store（两种效果相同，根据main.js的代码做判断，哪一个都可以）
Vue.prototype.$store = store;
export default store;

const storeMixin = {
  computed: {
    ...mapState(states),
    ...mapGetters(getterss),
  },

  methods: {
    ...mapMutations(mutationss),
    ...mapActions(actionss)
  }
}
// 全局混入使用
Vue.mixin(storeMixin)
