import React, { Component } from 'react';
import { auth } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';


const withAuthorization = (ComposedComponent) => {
  class withAuthorization extends Component {

    componentWillMount = () => {
      if (this.props.auth) {
        this.props.history.push('/');
      }
    }
       
    componentWillUpdate = () => {
      if (!this.props.auth){
        this.props.history.push('/');
      }
    }
    render = () => {   
                
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) =>
    ({ products: state.products, auth: state.auth });

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...auth }, dispatch);
  }
  return compose(withRouter,connect(mapStateToProps, mapDispatchToProps))(withAuthorization);
}

export default withAuthorization;