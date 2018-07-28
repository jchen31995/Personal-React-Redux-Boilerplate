import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { exampleAction } from '../redux/example_reducer'

/*
====================================================================
  This is how you set up any container component in Redux
====================================================================

// At top of file: //
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// At bottom of file: //
const mapStateToProps = (state) => ({
   someProp: state.stateInPropToRetrieve
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
   someDispatchProp: someActionCreator
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)

*/

class ExampleContainer extends Component {
  render() {
    this.props.exampleAction()
    return (
      <div>
        Here's an empty example container!
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToState(dispatch) {
  return bindActionCreators({
    exampleAction,
  }, dispatch)
}

ExampleContainer.propTypes = {
  exampleAction: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToState)(ExampleContainer)
