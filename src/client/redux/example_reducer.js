export const EXAMPLE_ACTION = 'EXAMPLE_ACTION'

export function actionCreator() {
  return { type: EXAMPLE_ACTION, payload: 'This is an example payload' }
}
export function exampleActionCreatorWithThunk() {
  return async (dispatch, getState) => {
    console.log('Redux store: ', getState())
    dispatch(actionCreator())
  }
}

const initialState = {
  exampleReducerState: true,
  message: 'Everything\'s routed correctly! This is the initial state',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case EXAMPLE_ACTION:
      // return some state
      return initialState
    default:
      return state
  }
}
