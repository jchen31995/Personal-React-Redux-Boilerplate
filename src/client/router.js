import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppContainer from './containers/AppContainer'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={AppContainer} />
    </Switch>
  </BrowserRouter>
)

export default Router
