import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import './ExampleContainer.scss'
import { exampleActionCreatorWithThunk } from '../../redux/example_reducer'
import { translatedMessages } from '../../localization/index'

const { greetings } = translatedMessages.exampleContainer

/*
==================================================================
  This is how you set up any containers in Redux
==================================================================

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
    const { exampleActionCreatorWithThunkExample } = this.props
    exampleActionCreatorWithThunkExample()

    return (
      <div id="example-greeting">
        { greetings } This is an example container!
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    exampleReducer: state.exampleReducer,
  }
}

function mapDispatchToState(dispatch) {
  return bindActionCreators({
    exampleActionCreatorWithThunkExample: exampleActionCreatorWithThunk,
  }, dispatch)
}

ExampleContainer.propTypes = {
  exampleActionCreatorWithThunkExample: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToState)(ExampleContainer)
