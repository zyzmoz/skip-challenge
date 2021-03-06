import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cart } from '../actions';
import { List, Button, Grid } from 'semantic-ui-react';
import * as orderProvider from '../providers/order';


class CartPage extends Component {

  listBuilder = (arr) => {
    console.log('cart', arr);
    return arr.map((item, index) => {
      return (
        <List.Item key={index}>
          <List.Content floated="right">
            <Grid.Row>
              <Grid.Column className="text-left" floated="left">
                <b>Price {item.price.toFixed(2)}</b>
              </Grid.Column>
              <Grid.Column floated="right">
                <Button onClick={() => this.remove(item.id)}>Remove</Button>
              </Grid.Column>
            </Grid.Row>

          </List.Content>
          <List.Content>
            <List.Header>
              {item.name}
            </List.Header>
            <List.Description>
              {item.description}
            </List.Description>
          </List.Content>
        </List.Item>
      )
    });
    // return list;
  }

  remove = (id) => {
    console.log(id);
    this.props.remove(id);
  }

  checkout = () => {
    orderProvider.getOrdersByCustomer().then(res => {
      console.log(res);      
    });
    orderProvider.createOrder(this.props.cart).then(res => {
      console.log(res);      
    }).catch(err => {
      console.log(err);
      
    });
  }  

  render() {
    const cart = this.props.cart;
    console.log(this.props);
    return (
      <div className="padding">
        <List divided verticalAlign='middle'>
          {this.listBuilder(cart)}
        </List>
        <Button 
          disabled={this.props.cart.length === 0} 
          color="green"
          onClick={() => this.checkout()}>Checkout</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>
  ({ cart: state.cart });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(cart, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);