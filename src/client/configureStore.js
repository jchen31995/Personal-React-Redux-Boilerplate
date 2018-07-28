import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import DevTools from '../containers/DevTools'

import rootReducer from './redux/index'

const initialState = {}

export function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  )
}
