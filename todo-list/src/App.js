import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    task: '',
    list: []
  }

  handleChange = event => {
    this.setState({
      task: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { task, list } = this.state
    this.setState({
      list: [task, ...list],
      task: ''
    })
  }

  render () {
    const { task, list } = this.state
    console.log(list)
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='form'>
          <label className='input-container' htmlFor='tarefa'>
            Tarefa
            <input
              id='tarefa'
              value={task}
              onChange={this.handleChange}
            />
            <button className='btn'>
              +
            </button>
          </label>
        </form>
      </div>
    )
  }
}

export default App
