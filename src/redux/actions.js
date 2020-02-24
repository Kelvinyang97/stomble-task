import { ADD_TODO, REMOVE_TODO } from './actionTypes'

let nextTodoId = 0
export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
})
