import React, { Component } from 'react'
import store from '../../redux/store'
// 引入action
import { createIncrementAction } from '../../redux/count/action'

export default class Count extends Component {

  state = {
    count: 0
  }

  increment = () => {
    const { value } = this.selectNumber
    // const { count } = this.state
    // this.setState({ count: count + value*1 })
    // store.dispatch({type: 'increment', data: value*1})
    store.dispatch(createIncrementAction(value*1))
  }

  decrement = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    this.setState({ count: count - value*1 })
  }

  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    if (count % 2 !== 0) {
      this.setState({ count: count + value*1 })
    }
  }

  asyncIncrement = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    setTimeout(() => {
      this.setState({ count: count + value*1 })
    }, 1000)
  }



  render() {
    return (
      <div>
        <h1>当前求和：{store.getState}</h1>
        <select name="count" id="" ref={ c => this.selectNumber = c} placeholder="请选择数值">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>加</button>
        <button onClick={this.decrement}>减</button>
        <button onClick={this.incrementIfOdd}>求和为奇数再加</button>
        <button onClick={this.asyncIncrement}>异步加</button>
      </div>
    )
  }
}