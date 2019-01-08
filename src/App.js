import React, { useContext } from 'react'
import { useInput } from './customHooks'

import { TodosContext } from './TodosProvider'

function Todo(props) {
  return (
    <div style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
      <div>
        <b>Title:</b> {props.title}
      </div>
      <div>
        <b>Completed?</b> {props.isCompleted ? 'Yes' : 'No'}
      </div>
    </div>
  )
}

function TodoList(props) {
  return (
    <div style={{ padding: '1rem' }}>
      {props.todos.map((todo, index) => (
        <Todo key={todo.id} title={todo.title} isCompleted={todo.isCompleted} />
      ))}
    </div>
  )
}

function TodoForm(props) {
  const titleInput = useInput()

  function handleClick() {
    props.onTodoAdd({
      title: titleInput.value,
      isCompleted: false
    })

    titleInput.resetValue()
  }

  return (
    <div style={{ padding: '1rem' }}>
      <input value={titleInput.value} onChange={titleInput.onChange} />
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default function App() {
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
