import React, { Component } from 'react'

export default class Todo extends Component {

  constructor() {
    super()
    this.state = {
      std: []
    }
  }

  addAdddata() {
    let data = document.getElementById('data').value
    this.setState({ std: [...this.state.std, data] })
    document.getElementById('data').value = ''
    console.log(this.state);

  }

  deleteData(i) {
    let newStd = [...this.state.std]
    newStd.splice(i, 1)
    this.setState({ std: newStd })
  }
  render() {


    return (
      <>
        <input type="text" id='data' />
        <button onClick={() => {
          this.addAdddata()
        }}>Add</button>

        {this.state.std.map((result, i) => {
          return (
            <>
              <h1>{result}</h1>
              <button onClick={() => {
                this.deleteData(i)
              }}>Delete</button>
            </>
          )
        })}
      </>
    )
  }
}
