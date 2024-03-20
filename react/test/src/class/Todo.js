import React, { Component } from 'react'

export default class Todo extends Component {

  constructor() {
    super()
    this.state = {
      std: [],
      index: null
    }
  }

  addAdddata() {
    let data = document.getElementById('data').value
    if (this.state.index == null) {
      this.setState({ std: [...this.state.std, data] })
      document.getElementById('data').value = ''
      console.log(this.state);
    } else {
      let std = [...this.state.std]
      std[this.state.index] = data
      this.setState({ std: std, index: null })
      document.getElementById('data').value = ''
    }

  }

  updateData(res, i) {
    document.getElementById('data').value = res
    this.setState({ index: i })
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
        }}>{this.state.index == null ? 'Add' : 'Update'}</button>

        {this.state.std.map((result, i) => {
          return (
            <>
              <h1>{result}</h1>
              <button onClick={() => {
                this.deleteData(i)
              }}>Delete</button>


              <button onClick={() => {
                this.updateData(result, i)
              }}>Update</button>
            </>
          )
        })}
      </>
    )
  }
}
