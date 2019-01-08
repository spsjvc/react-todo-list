import React, { useContext } from 'react'

import { TodosContext } from '../../providers/TodosProvider'
import { TodoList, TodoForm } from '../../components'

export default function TodosApp() {
  const { state, actions } = useContext(TodosContext)

  function handleTodoAdd(todo) {
    actions.addTodo(todo)
  }

  return (
    <>
      <TodoList todos={state.todos} />
      <TodoForm onTodoAdd={handleTodoAdd} />
    </>
  )
}
