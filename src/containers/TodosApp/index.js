import React, { useContext } from 'react'

import { TodosContext } from '../../providers/TodosProvider'
import { TodoList, TodoForm } from '../../components'

export default function TodosApp() {
  const { state, actions } = useContext(TodosContext)

  function handleAddTodo(todo) {
    actions.addTodo(todo)
  }

  function handleDeleteTodo(todo) {
    actions.deleteTodo(todo)
  }

  function handleChangeTodoPriority(todo) {
    actions.changeTodoPriority(todo)
  }

  function handleMarkTodoAsCompleted(todo) {
    actions.markTodoAsCompleted(todo)
  }

  return (
    <>
      <TodoList
        todos={state.todos}
        onDeleteTodo={handleDeleteTodo}
        onChangeTodoPriority={handleChangeTodoPriority}
        onMarkTodoAsCompleted={handleMarkTodoAsCompleted}
      />
      <TodoForm onAddTodo={handleAddTodo} />
    </>
  )
}
