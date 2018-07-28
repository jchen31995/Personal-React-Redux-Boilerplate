import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { exampleAction } from '../redux/example_reducer'

class ExampleContainer extends Component {
  render() {
    this.props.exampleAction()
    return (
      <div>
        Here's an exmpty example container!
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
