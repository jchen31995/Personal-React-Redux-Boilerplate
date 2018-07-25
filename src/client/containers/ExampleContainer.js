import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { exampleAction } from '../redux/example_reducer'

class ExampleContainer extends Component {
  render() {
    this.props.exampleAction()
    return(
      <div> 
        Here's an exmpty example container!
      </div>
    )
      
  }
}

function mapStateToProps (state) {
  return {

  }
}

function mapDispatchToState (dispatch) {
  return bindActionCreators({
    exampleAction,
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToState)(ExampleContainer)
