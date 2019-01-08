import React from 'react'

export function Todo(props) {
  function handleTitleClick() {
    props.onChangeTodoPriority(props.todo)
  }

  function getColorForPriority(priority) {
    switch (priority) {
      case 1:
        return 'black'
      case 2:
        return 'orange'
      case 3:
        return 'red'
      default:
        return 'black'
    }
  }

  return (
    <div
      style={{
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem'
      }}
    >
      <div
        style={{ color: getColorForPriority(props.todo.priority) }}
        onClick={handleTitleClick}
      >
        <b>Title:</b> {props.todo.title}
      </div>
      <div>
        <b>Completed?</b> {props.todo.isCompleted ? 'Yes' : 'No'}
      </div>
    </div>
  )
}

export default function TodoList(props) {
  return (
    <div style={{ padding: '1rem' }}>
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onChangeTodoPriority={props.onChangeTodoPriority}
        />
      ))}
    </div>
  )
}
