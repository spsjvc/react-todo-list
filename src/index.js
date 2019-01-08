import React from 'react'
import ReactDOM from 'react-dom'

import { TodosApp } from './containers'
import { TodosProvider } from './providers'

ReactDOM.render(
  <TodosProvider>
    <TodosApp />
  </TodosProvider>,
  document.getElementById('root')
)
