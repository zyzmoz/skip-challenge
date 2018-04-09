import React, { Component } from 'react';
import { Menu, MenuItem, Item, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as productProvider from '../providers/products';
import { connect } from 'react-redux';
import {products as actions} from '../actions';

class MenuComponent extends Component {
  searchProduct = (str) => {
    productProvider.searchProducts(str).then((res) => {
      this.props.loadProducts(res.data);
    });
  }

  loginButton = () => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      return <Link className="menu item" to="/Login">Login</Link>
    } else {
      <MenuItem onClick={() => alert('Logout')}>Logout</MenuItem>
    }
  }

  render() {
    return (
      <Menu>
        <Link className="menu item" to="/">Products</Link>
        <Link className="menu item" to="/cart">Cart</Link>
        <Link className="menu item" to="/orders">Orders</Link>
        <Menu.Menu position="right">
          <MenuItem>
            <Input
              icon="search"
              type="text"
              placeholder="Search"
              onChange={e => this.searchProduct(e.target.value)} />
          </MenuItem>
          {this.loginButton()}
        </Menu.Menu>
      </Menu>
    )
  }
}

const mapStateToProps = (state) =>
  ({ products: state.products });

export default connect(mapStateToProps, actions)(MenuComponent);