import React from 'react'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.css'

const userTask = [
  {
    task: 'Mow the lawn',
    id: 412356,
    complete: false
  },
  {
    task: "Study for tomorrow's test",
    id: 412357,
    complete: false
  }
]

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userTask
    }
  }

  addItem = (e, itemName) => {
    e.preventDefault()
    const existing = this.state.userTask.filter(item => item.name === itemName)
    if (existing.length === 0) {
      const newItem = {
        task: itemName,
        id: Date.now(),
        complete: false
      }
      this.setState({
        userTask: [...this.state.userTask, newItem]
      })
    }
  }

  clearList = e => {
    e.preventDefault()
    this.setState({
      userTask: this.state.userTask.filter(item => !item.complete)
    })
  }

  toggleItem = itemId => {
    this.setState({
      userTask: this.state.userTask.map(item => {
        if (item.id === itemId) {
          return { ...item, complete: !item.complete }
        }
        return item
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <span className='title'>To-do List</span>
        </div>
        <TodoForm addItem={this.addItem} />
        <TodoList
          userTask={this.state.userTask}
          toggleItem={this.toggleItem}
          clearList={this.clearList}
        />
      </div>
    )
  }
}
