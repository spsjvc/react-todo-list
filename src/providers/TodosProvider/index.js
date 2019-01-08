import React, { useState, createContext } from 'react'

export const TodosContext = createContext()

export default function TodosProvider(props) {
  const [todos, setTodos] = useState([])
  const [autoIncrementingId, setAutoIncrementingId] = useState(1)

  function addTodo(todo) {
    setTodos([...todos, { ...todo, id: autoIncrementingId }])
    setAutoIncrementingId(autoIncrementingId + 1)
  }

  return (
    <TodosContext.Provider
      value={{
        state: {
          todos
        },
        actions: {
          addTodo
        }
      }}
    >
      {props.children}
    </TodosContext.Provider>
  )
}
