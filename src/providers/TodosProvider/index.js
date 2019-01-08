import React, { useReducer, createContext } from 'react'

export const TodosContext = createContext()

const initialState = {
  todos: [],
  autoIncrementingId: 1
}

function todosReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: state.autoIncrementingId, ...action.payload }
        ],
        autoIncrementingId: state.autoIncrementingId + 1
      }
    }

    case 'DELETE_TODO': {
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload.id)
      }
    }

    case 'CHANGE_TODO_PRIORITY': {
      const todoIndex = state.todos.findIndex(t => t.id === action.payload.id)
      const newPriority =
        action.payload.priority !== 3 ? action.payload.priority + 1 : 1

      return {
        ...state,
        todos: [
          ...state.todos.slice(0, todoIndex),
          { ...action.payload, priority: newPriority },
          ...state.todos.slice(todoIndex + 1, state.todos.length)
        ]
      }
    }

    case 'MARK_TODO_AS_COMPLETED': {
      const todoIndex = state.todos.findIndex(t => t.id === action.payload.id)

      return {
        ...state,
        todos: [
          ...state.todos.slice(0, todoIndex),
          { ...action.payload, isCompleted: true },
          ...state.todos.slice(todoIndex + 1, state.todos.length)
        ]
      }
    }

    default: {
      return state
    }
  }
}

const actions = {
  addTodo: dispatch => todo => {
    dispatch({
      type: 'ADD_TODO',
      payload: todo
    })
  },
  deleteTodo: dispatch => todo => {
    dispatch({
      type: 'DELETE_TODO',
      payload: todo
    })
  },
  changeTodoPriority: dispatch => todo => {
    dispatch({
      type: 'CHANGE_TODO_PRIORITY',
      payload: todo
    })
  },
  markTodoAsCompleted: dispatch => todo => {
    dispatch({
      type: 'MARK_TODO_AS_COMPLETED',
      payload: todo
    })
  }
}

function mapDispatchToActions(dispatch, actions) {
  return Object.keys(actions).reduce((accumulator, key) => {
    return {
      ...accumulator,
      [key]: actions[key](dispatch)
    }
  }, {})
}

export default function TodosProvider(props) {
  const [state, dispatch] = useReducer(todosReducer, initialState)

  return (
    <TodosContext.Provider
      value={{
        state,
        actions: mapDispatchToActions(dispatch, actions)
      }}
    >
      {props.children}
    </TodosContext.Provider>
  )
}
