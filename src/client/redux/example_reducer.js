export const EXAMPLE_ACTION = 'EXAMPLE_ACTION'

export function exampleAction() {
  return { type: EXAMPLE_ACTION, payload: 'This is an example payload' }
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
