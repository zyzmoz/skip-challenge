import React, { Component } from 'react';
import withAuthentication from '../components/hoc/withAuthentication';

class OrdersPage extends Component {
  render = () => {
    return(
      <h1>Orders</h1>
    )
  }
}

export default withAuthentication(OrdersPage);