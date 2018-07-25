import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './redux/index';
// import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';

const initialState = {}

export function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );
}
