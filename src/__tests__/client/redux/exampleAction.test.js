
import { EXAMPLE_ACTION, exampleAction } from '../../../client/redux/example_reducer'

describe('Testing Action Creator in Example Reducer', () => {
  it('should create an action with type + payload', () => {
    const action = exampleAction()
    expect(action.type).toEqual(EXAMPLE_ACTION)
    expect(action.payload).toEqual('This is an example payload')
  })
})