import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function TodoContainer() {
  return (
    <div>
      <h3>React Todo App</h3>
      <TodoInput/>
      <TodoList/>
    </div>
  )
}

export default TodoContainer