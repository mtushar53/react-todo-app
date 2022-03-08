const types = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  DONE_TODO: 'DONE_TODO'
}

export const actions = {
  addTodo: (todo) => {
    return {
      type: types.ADD_TODO,
      todo
    }
  },
  deleteTodo: (index) => {
    return {
      type: types.DELETE_TODO,
      key: index
    }
  },
  doneTodo: (index) => {
    return {
      type: types.DONE_TODO,
      key: index
    }
  }
}

const initialState = {
  todos: []
}

export const reducer = (state=initialState, action) => {
  const {type, todo, key} = action
  switch(type) {
    case types.ADD_TODO:
      const todos = [...state.todos, todo]
      return {...state, todos}
    case types.DELETE_TODO:
      return {todos: state.todos.filter((todo, index) => index !== key)}
    case types.DONE_TODO:
      const tempTodos = [...state.todos]
      const tempTodo = {...tempTodos[key]}
      tempTodo.isDone = !tempTodo.isDone
      tempTodos[key] = tempTodo
      return {todos: tempTodos}
    default:
      return state
  }
}