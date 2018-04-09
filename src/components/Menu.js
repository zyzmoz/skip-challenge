import React, { Component } from 'react';
import { Menu, MenuItem, Item, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as productProvider from '../providers/products';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {products, auth} from '../actions';

class MenuComponent extends Component {
  searchProduct = (str) => {
    productProvider.searchProducts(str).then((res) => {
      this.props.loadProducts(res.data);
    });
  }

  loginButton = () => {
    // const isLoggedIn = localStorage.getItem('XSRF-TOKEN')? true: false;
    if (!this.props.auth) {
      return <Link className="menu item" to="/Login">Login</Link>
    } else {
      return <MenuItem onClick={() => this.signOut()}>Logout</MenuItem>
    }
  }

  signOut = () => {
    this.props.signOut();
  }

  render() {
    console.log(this.props.auth);
    
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
  ({ products: state.products, auth: state.auth });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...auth, ...products}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);