import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { configureStore } from './configureStore'
import AppContainer from './containers/AppContainer'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route path="/" name="home" component={ AppContainer } />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
