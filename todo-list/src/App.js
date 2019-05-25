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

  handleClick = index => {
    this.setState({
      list: this.state.list.filter((_, i) => {
        return index !== i
      })
    })
  }

  render () {
    const { task, list } = this.state
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
          <ul className='list'>
            {
              list.map((item, index) =>
                <li
                  onClick={
                    () => this.handleClick(index)
                  }
                  className='list-item' key={index}>
                  {item}
                </li>
              )
            }
          </ul>
        </form>
      </div>
    )
  }
}

export default App
