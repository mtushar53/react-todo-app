import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoInput extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title: '',
      isDone: false
    }
  }

  changeHandeler = (event) => {
    this.setState({
      ...this.state,
      title: event.target.value
    })
  }

  addHandeler = () => {
    this.props.addTodo(this.state)
    this.setState({
      title: '',
      isDone: false
    })
  }

  render() {
    const { title } = this.state
    return (
        <div>
            <input placeholder='Todo Title' value={title} onChange={ this.changeHandeler }/>
            <button style={{marginLeft: 20}} onClick={this.addHandeler} disabled={!title.length}>Add</button>
        </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos
//   }
// }

const mapDispatchToProps = (dispatch) => {
  const {actions} = require("../redux/TodoRedux")

  return {
    addTodo: (todo) => {
      dispatch(actions.addTodo(todo))
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoInput)