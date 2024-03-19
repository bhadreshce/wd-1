import React, { Component } from 'react'

export default class Lifecycle extends Component {

  constructor() {
    super()
    this.state = { count: 0 }
  }

  // static getDerivedStateFromProps(props, state) {
  //   return { count: props.site }
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log(prevState);

  // }

  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate');
  //   if (this.state.count < 10) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // componentWillUpdate(newProps, newState) {
  //   console.log('componentWillUpdate');

  //   if (newState.count > 5) {
  //     document.body.style.backgroundColor = 'red'

  //   }
  // }

  componentDidUpdate(oldProps, oldState) {
    // console.log('componentDidUpdate');

    // console.log(oldState);

  }

  render() {
    return (

      <div>
        <button onClick={() => {
          this.setState({ count: this.state.count + 1 })
        }}>Increement</button>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}
