import React, { useContext } from 'react'

import { TodosContext } from '../../providers/TodosProvider'
import { TodoList, TodoForm } from '../../components'

export default function TodosApp() {
  const { state, actions } = useContext(TodosContext)

  function handleAddTodo(todo) {
    actions.addTodo(todo)
  }

  function handleChangeTodoPriority(todo) {
    actions.changeTodoPriority(todo)
  }

  return (
    <>
      <TodoList
        todos={state.todos}
        onChangeTodoPriority={handleChangeTodoPriority}
      />
      <TodoForm onAddTodo={handleAddTodo} />
    </>
  )
}
