import React from 'react'

import { useInput } from '../../hooks'

export default function TodoForm(props) {
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
