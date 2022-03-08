import React from 'react'
import { connect } from 'react-redux'

function TodoList({todos, doneTodo, deleteTodo}) {
  function handleChange(index) {
    doneTodo(index)
  }

  function tableRow(todo, index) {
    return (
      <tr key={todo.title}>
        <td><input type="checkbox" checked={todo.isDone} onChange={() => handleChange(index)}/></td>
        <td>{todo.isDone ? <del>{todo.title}</del> : todo.title}</td>
        <td><button style={{marginLeft: 20}} onClick={() => deleteTodo(index)}>Delete</button></td>
      </tr>
    )
  }

  if (!todos.length) {
    return null
  }

  return (
    <div>
      <table className='todo-table'>
        <thead>
          <tr>
            <th>Status</th>
            <th>Todo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          todos.map((todo, index) => {
            return tableRow(todo, index)
          })
        }
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  const {actions} = require("../redux/TodoRedux")
  return {
    deleteTodo: (index) => {
      dispatch(actions.deleteTodo(index))
    },
    doneTodo: (index) => {
      dispatch(actions.doneTodo(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)