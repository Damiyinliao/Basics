/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

// 引入createStore，专门用于创建
import { legacy_createStore as createStore} from 'redux'
//引入为count组件服务的
import countReducer from './count/reducer'

// const store = {

// }

export default createStore(countReducer)