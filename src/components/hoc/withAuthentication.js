import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { auth } from '../../actions';
import { LoginPage } from '../../pages/Login';

const withAuthentication = (ComposedComponent) => {
  class withAuthentication extends Component {
    componentWillMount = () => {
      if (!this.props.auth)
        this.props.history.push('/login');
    }

    componentWillUpdate = () => {
      if (this.props.auth)
        this.props.history.push('/login');
    }

    render = () =>{
      return (        
        <ComposedComponent {...this.props} />      
        
      )
    }
  }
  const mapStateToProps = (state) =>
    ({auth: state.auth});
  
  return compose(
    withRouter, connect(mapStateToProps)
  )(withAuthentication);

}

export default withAuthentication;