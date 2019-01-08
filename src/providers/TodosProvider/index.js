import React, { useState, createContext } from 'react'

export const TodosContext = createContext()

export default function TodosProvider(props) {
  const [todos, setTodos] = useState([])
  const [autoIncrementingId, setAutoIncrementingId] = useState(1)

  function addTodo(todo) {
    setTodos([...todos, { id: autoIncrementingId, ...todo }])
    setAutoIncrementingId(autoIncrementingId + 1)
  }

  function changeTodoPriority(todo) {
    const todoIndex = todos.findIndex(t => t.id === todo.id)
    const newPriority = todo.priority !== 3 ? todo.priority + 1 : 1

    setTodos([
      ...todos.slice(0, todoIndex),
      { ...todo, priority: newPriority },
      ...todos.slice(todoIndex + 1, todos.length)
    ])
  }

  return (
    <TodosContext.Provider
      value={{
        state: {
          todos
        },
        actions: {
          addTodo,
          changeTodoPriority
        }
      }}
    >
      {props.children}
    </TodosContext.Provider>
  )
}
