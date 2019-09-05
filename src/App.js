import React from 'react'

import './components/TodoComponents/Todo.css'

const userTask = [
  {
    task: 'Mow the lawn',
    id: 412356,
    complete: false
  },
  {
    task: 'Study',
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

  render() {
    return <div className='App'></div>
  }
}
