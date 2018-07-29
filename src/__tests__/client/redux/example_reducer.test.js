import reducer, { EXAMPLE_ACTION, exampleAction } from '../../../client/redux/example_reducer'

describe('Example Reducer Test', () => {
  it('Should initialize state', () => {
    const state = reducer(undefined, {})
    expect(state).toEqual({
      exampleReducerState: true,
      message: 'Everything\'s routed correctly! This is the initial state',
    })
  })

  it('Should create an action with type + payload', () => {
    const action = exampleAction()
    expect(action.type).toEqual(EXAMPLE_ACTION)
    expect(action.payload).toEqual('This is an example payload')
  })
})
