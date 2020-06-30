import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class TodoForm extends Component {
  constructor() {
    super()
    this.state = {
      itemName: ''
    }
  }
  handleChanges = e => {
    this.setState({ itemName: e.target.value })
  }

  handleSubmit = e => {
    this.props.addItem(e, this.state.itemName)
    this.setState({ itemName: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate autoComplete='off'>
        <TextField
          className='text-field'
          id='standard-with-placeholder'
          label='Add New Task'
          placeholder='Press Enter to Submit'
          margin='normal'
          type='text'
          name='item'
          value={this.state.itemName}
          onChange={this.handleChanges}
        />
      </form>
    )
  }
}

export default TodoForm
