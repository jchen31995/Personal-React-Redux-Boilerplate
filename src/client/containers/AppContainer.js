import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ExampleContainer from './ExampleContainer'

import Welcome from '../components/Welcome'
import ExampleComponent from '../components/ExampleComponent'
import PageNotFound from '../components/PageNotFound'

import DevTools from './DevTools'

const isDev = process.env.NODE_ENV !== 'production'

// eslint here disabled for now, eventually this will grow into a full container
/* eslint-disable class-methods-use-this */
class AppContainer extends Component {
  render() {
    return (
      <div>
        {isDev ? <DevTools /> : null}
        <Switch>
          <Route exact path="/" component={ Welcome } />
          <Route exact path="/examplecomponent" component={ ExampleComponent } />
          <Route exact path="/examplecontainer" component={ ExampleContainer } />
          <Route exact path="*" component={ PageNotFound } />
        </Switch>
      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(AppContainer)
