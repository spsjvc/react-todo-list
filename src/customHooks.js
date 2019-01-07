import { useState } from 'react'

export function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue)

  function resetValue() {
    setValue(initialValue)
  }

  function handleValueChange(event) {
    setValue(event.target.value)
  }

  return {
    value,
    resetValue,
    onChange: handleValueChange
  }
}
