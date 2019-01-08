import React from 'react'

export function Todo(props) {
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

export default function TodoList(props) {
  return (
    <div style={{ padding: '1rem' }}>
      {props.todos.map((todo, index) => (
        <Todo key={todo.id} title={todo.title} isCompleted={todo.isCompleted} />
      ))}
    </div>
  )
}
