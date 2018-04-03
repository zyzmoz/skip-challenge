import React, { Component } from 'react';
import HomePage from '../pages/Home';
import MenuComponent from './Menu';
import CartPage from '../pages/Cart';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () =>
  <Router >
    <div>
      <MenuComponent />
      <Route exact path="/"
        component={() => <HomePage />}
      />
      <Route exact path="/cart"
        component={() => <CartPage />}
      />
    </div>
  </Router>

export default App;