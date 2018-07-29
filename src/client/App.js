import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

import Router from './router'

const store = configureStore()

const App = () => (
  <Provider store={ store }>
    <Router/>
  </Provider>
)

export default App
