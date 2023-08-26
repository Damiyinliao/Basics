/**
 * 该文件专门为Count组件生成action对象
 * 只是稍微加工一下action，不进行具体的操作,放在store.dispatch()里
 */

export const createIncrementAction = data => ({type: 'increment', data})
export const createDecrementAction = data => ({type: 'decrement', data})