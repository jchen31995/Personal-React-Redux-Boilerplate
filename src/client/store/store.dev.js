import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import DevTools from '../containers/DevTools'
import rootReducer from '../redux/index'

const initialState = {}

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    compose(
      DevTools.instrument(),
    ),
    applyMiddleware(thunk),
  )
}
